import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-4xl font-display font-black text-secondary mb-4">Find Us</h2>
              <p className="text-gray-600">Drop by for the best fast food experience in Khemis Miliana.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Address</h4>
                  <p className="text-gray-600">764G+PXR, Khemis Miliana<br />Algeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Opening Hours</h4>
                  <p className="text-gray-600">Everyday<br />Open until 12:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Contact</h4>
                  <p className="text-gray-600">0675 15 16 12</p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=764G+PXR,Khemis+Miliana" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-bold hover:bg-secondary/90 transition-colors"
            >
              <Navigation className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Map Placeholder */}
          <div className="lg:w-2/3 w-full h-[400px] md:h-[500px] bg-accent rounded-3xl overflow-hidden relative shadow-lg">
            {/* Using a styled iframe for Google Maps based on coordinates/address */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12828.847525287849!2d2.216667!3d36.266667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1287c70000000001%3A0x0!2zMzbCsDE2JzAwLjAiTiAywrAxMycwMC4wIkU!5e0!3m2!1sen!2sdz!4v1600000000000!5m2!1sen!2sdz" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mr Woody Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}