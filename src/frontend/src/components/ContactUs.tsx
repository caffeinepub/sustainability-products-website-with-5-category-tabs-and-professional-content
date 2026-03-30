import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const contactDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    value:
      "Office 2502, Indigo Icon Tower, Jumeirah Lakes Towers (JLT), Dubai, UAE",
    link: "https://maps.google.com/?q=Indigo+Icon+Tower+JLT+Dubai",
    linkText: "View on Google Maps",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 4 453 9997",
    link: "tel:+97144539997",
    linkText: "Call us",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ge3s.org",
    link: "mailto:info@ge3s.org",
    linkText: "Send email",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday to Friday, 9:00 AM – 6:00 PM (GST)",
  },
];

const subjects = [
  "General Enquiry",
  "Product Enquiry",
  "Partnership Opportunity",
  "Newsletter Subscription",
  "Other",
];

export function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate async submit
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    toast.success(
      "Enquiry sent successfully! Our team will get back to you within 1 business day.",
    );
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Have a question about our products, a partnership opportunity, or
              need sustainability consulting? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact details + map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 mb-10">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium">{item.value}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline"
                      >
                        {item.linkText} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="bg-accent/50 p-6 text-center">
                <MapPin className="mx-auto text-primary mb-3" size={32} />
                <p className="font-semibold text-foreground mb-1">
                  Indigo Icon Tower, JLT
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Office 2502, Jumeirah Lakes Towers, Dubai, UAE
                </p>
                <a
                  href="https://maps.google.com/?q=Indigo+Icon+Tower+JLT+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  data-ocid="contact.map_marker"
                >
                  <MapPin size={14} />
                  Open in Google Maps
                </a>
              </div>
              <iframe
                title="GE3S Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5!2d55.14!3d25.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6e6a5b5b5b%3A0x0!2sIndigo+Icon+Tower%2C+JLT%2C+Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Send an Enquiry
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-ocid="contact.dialog"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    data-ocid="contact.input"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input
                    id="company"
                    data-ocid="contact.input"
                    placeholder="ABC Corporation"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    data-ocid="contact.input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    data-ocid="contact.input"
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">
                  Subject <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.subject}
                  onValueChange={(val) => handleChange("subject", val)}
                  required
                >
                  <SelectTrigger id="subject" data-ocid="contact.select">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  data-ocid="contact.textarea"
                  placeholder="Tell us about your enquiry, project, or how we can help you..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-ocid="contact.submit_button"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Send Enquiry
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
