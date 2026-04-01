import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download, Lock, Search } from "lucide-react";
import { useState } from "react";
import { productListData } from "../content/productListData";

interface ProductListProps {
  isAuthenticated: boolean;
  onAuthenticate: () => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Waste Management Products": "bg-amber-100 text-amber-800 border-amber-200",
  "Water Treatment Products": "bg-blue-100 text-blue-800 border-blue-200",
  "Renewable Energy Products":
    "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Energy and Environment Monitoring Products":
    "bg-purple-100 text-purple-800 border-purple-200",
  "Eco-Friendly Construction Materials":
    "bg-green-100 text-green-800 border-green-200",
  "BESS (Battery Energy Storage System)":
    "bg-teal-100 text-teal-800 border-teal-200",
};

function downloadCSV(data: typeof productListData) {
  const headers = [
    "SKU",
    "Product Name",
    "Category",
    "Description",
    "Price (AED excl. VAT)",
    "Price (USD excl. VAT)",
    "Quote Only",
    "Price Note",
    "Supplier",
    "Lead Time",
  ];

  const csvEscape = (val: string) => `"${val.replace(/"/g, '""')}"`;

  const rows = data.map((row) => [
    csvEscape(row.sku),
    csvEscape(row.name),
    csvEscape(row.category),
    csvEscape(row.description),
    csvEscape(row.priceAed),
    csvEscape(row.priceUsd),
    csvEscape(row.isQuote ? "Yes" : "No"),
    csvEscape(row.priceNote),
    csvEscape(row.supplier),
    csvEscape(row.leadTime),
  ]);

  const csvContent = [headers.map(csvEscape), ...rows]
    .map((r) => r.join(","))
    .join("\n");

  const BOM = "\uFEFF";
  const blob = new Blob([BOM + csvContent], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "GE3S_Product_Repository.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function LockScreen({ onAuthenticate }: { onAuthenticate: () => void }) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "GE3S2024") {
      onAuthenticate();
    } else {
      setError("Incorrect passcode. Please try again.");
      setPasscode("");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div
        data-ocid="product_list.dialog"
        className={`w-full max-w-md bg-card border border-border rounded-2xl shadow-lg p-8 text-center ${
          isShaking ? "animate-[shake_0.5s_ease-in-out]" : ""
        }`}
      >
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="h-8 w-8 text-primary" />
          </div>
        </div>

        <img
          src="/assets/generated/ge3s-logo-new.png"
          alt="Global Energy and Environmental Engineering Services"
          className="h-12 w-auto mx-auto mb-4 object-contain"
        />

        <h2 className="text-xl font-semibold text-foreground mb-2">
          Employee Access Only
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Enter your company passcode to access the product repository.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            data-ocid="product_list.input"
            type="password"
            placeholder="Enter company passcode"
            value={passcode}
            onChange={(e) => {
              setPasscode(e.target.value);
              setError("");
            }}
            className="text-center tracking-widest text-base"
            autoFocus
          />

          {error && (
            <p
              data-ocid="product_list.error_state"
              className="text-sm text-destructive"
            >
              {error}
            </p>
          )}

          <Button
            data-ocid="product_list.submit_button"
            type="submit"
            className="w-full"
            disabled={!passcode}
          >
            Unlock Repository
          </Button>
        </form>
      </div>
    </div>
  );
}

export function ProductList({
  isAuthenticated,
  onAuthenticate,
}: ProductListProps) {
  const [search, setSearch] = useState("");

  if (!isAuthenticated) {
    return <LockScreen onAuthenticate={onAuthenticate} />;
  }

  const filtered = productListData.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.supplier.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <TooltipProvider>
      <div className="container mx-auto px-4 py-8 max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-foreground">
                Product Repository - Global Energy and Environmental Engineering
                Services
              </h1>
              <Badge
                data-ocid="product_list.panel"
                className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold"
              >
                Internal Use Only
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-medium text-foreground">
                {filtered.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-foreground">
                {productListData.length}
              </span>{" "}
              products
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                data-ocid="product_list.search_input"
                placeholder="Search products, categories…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button
              data-ocid="product_list.primary_button"
              onClick={() => downloadCSV(filtered)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shrink-0"
            >
              <Download className="h-4 w-4" />
              Download Excel
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold text-foreground w-28">
                    SKU
                  </TableHead>
                  <TableHead className="font-semibold text-foreground min-w-[180px]">
                    Product Name
                  </TableHead>
                  <TableHead className="font-semibold text-foreground min-w-[160px]">
                    Category
                  </TableHead>
                  <TableHead className="font-semibold text-foreground min-w-[260px]">
                    Description
                  </TableHead>
                  <TableHead className="font-semibold text-foreground min-w-[160px]">
                    Price AED
                  </TableHead>
                  <TableHead className="font-semibold text-foreground min-w-[160px]">
                    Price USD
                  </TableHead>
                  <TableHead className="font-semibold text-foreground text-center w-24">
                    Quote Only
                  </TableHead>
                  <TableHead className="font-semibold text-foreground min-w-[180px]">
                    Supplier
                  </TableHead>
                  <TableHead className="font-semibold text-foreground min-w-[120px]">
                    Lead Time
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell
                      data-ocid="product_list.empty_state"
                      colSpan={9}
                      className="text-center py-12 text-muted-foreground"
                    >
                      No products match your search.
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((item, i) => (
                    <TableRow
                      key={item.sku}
                      data-ocid={`product_list.item.${i + 1}`}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        {item.sku}
                      </TableCell>
                      <TableCell className="font-medium text-foreground">
                        {item.name}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${
                            CATEGORY_COLORS[item.category] ??
                            "bg-gray-100 text-gray-700 border-gray-200"
                          }`}
                        >
                          {item.category
                            .replace(" Products", "")
                            .replace(" Materials", "")
                            .replace(" (Battery Energy Storage System)", "")}
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground max-w-[280px]">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="line-clamp-2 cursor-help">
                              {item.description}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent
                            side="top"
                            className="max-w-xs text-xs leading-relaxed"
                          >
                            {item.description}
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell className="text-sm font-medium">
                        {item.isQuote ? (
                          <span className="text-muted-foreground italic">
                            Request Quote
                          </span>
                        ) : (
                          <span className="text-foreground">
                            {item.priceAed}
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-sm font-medium">
                        {item.isQuote ? (
                          <span className="text-muted-foreground italic">
                            Request Quote
                          </span>
                        ) : (
                          <span className="text-foreground">
                            {item.priceUsd}
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.isQuote ? (
                          <Badge className="bg-orange-100 text-orange-700 border border-orange-200 text-[10px]">
                            Yes
                          </Badge>
                        ) : (
                          <Badge className="bg-green-100 text-green-700 border border-green-200 text-[10px]">
                            No
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {item.supplier}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {item.leadTime}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground text-center">
          All prices are indicative UAE market rates. Prices shown exclude VAT
          where applicable. Contact Global Energy and Environmental Engineering
          Services for formal quotations and availability.
        </p>
      </div>
    </TooltipProvider>
  );
}
