import { ArrowLeft, CheckCircle2, ShieldCheck, PackageCheck, Leaf, Truck } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { products } from "@/lib/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <Layout>
      <section className="bg-paper min-h-screen pt-24 pb-12">
        <div className="container-x">
          {/* Breadcrumb */}
          <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:text-cocoa transition-colors mb-8 font-sans text-sm uppercase tracking-widest">
            <ArrowLeft size={16} />
            Back to Catalogue
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image Column */}
            <div className="relative group rounded-2xl overflow-hidden bg-surface shadow-deep aspect-[4/5] lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 text-xs uppercase tracking-[0.25em]">
                <ShieldCheck size={16} />
                Export Quality Verified
              </div>
            </div>

            {/* Details Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-primary" />
                <span className="text-xs uppercase tracking-[0.3em] text-cocoa/55">Shaarav Signature</span>
              </div>
              
              <h1 className="display-xl text-cocoa mb-6">{product.name}</h1>
              
              <p className="text-2xl text-cocoa/80 leading-relaxed font-sans mb-10 border-l-4 border-primary pl-6">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Leaf, title: "100% Pure", desc: "No artificial colors or additives." },
                  { icon: ShieldCheck, title: "Lab Tested", desc: "Moisture, color & mesh checked." },
                  { icon: PackageCheck, title: "Premium Pack", desc: "Aroma-lock pouches & cartons." },
                  { icon: Truck, title: "Global Export", desc: "Ready for international dispatch." }
                ].map((spec, i) => (
                  <div key={i} className="bg-surface p-6 rounded-xl border border-border shadow-soft flex items-start gap-4">
                    <spec.icon className="text-primary shrink-0" size={24} />
                    <div>
                      <h4 className="font-display text-lg text-cocoa mb-1">{spec.title}</h4>
                      <p className="text-sm text-cocoa/65">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-cocoa font-medium">
                  Request Quote
                </Link>
                <Link to="/quality" className="inline-flex items-center justify-center gap-2 border border-cocoa/20 bg-transparent px-8 py-4 text-cocoa transition-colors hover:border-primary hover:text-primary font-medium">
                  View Quality Standards
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* Product Assurance Banner */}
      <section className="bg-cocoa text-paper py-16">
        <div className="container-x text-center">
          <h3 className="font-display text-3xl mb-8">Every batch earns its shipment.</h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {["Mechanical Cleaning", "Low-Heat Grinding", "Metal Detection", "Aroma Locking"].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <CheckCircle2 className="text-primary" size={28} />
                <span className="text-sm uppercase tracking-wider text-paper/80">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
