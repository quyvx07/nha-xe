import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Liên hệ | Nhà xe Hải Dương - Tuyến Hải Dương đi Hà Nội',
  description: 'Liên hệ với Nhà xe Hải Dương để được hỗ trợ đặt vé và các thông tin khác. Chúng tôi luôn sẵn sàng phục vụ 24/7.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Địa chỉ',
      details: ['123 Đường ABC, TP. Hải Dương', 'Văn phòng Hà Nội: 456 Đường XYZ']
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Điện thoại',
      details: ['0123.456.789', '0987.654.321']
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      details: ['contact@nhaxehaiduong.com', 'support@nhaxehaiduong.com']
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Giờ làm việc',
      details: ['24/7', 'Phục vụ cả ngày lễ']
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Liên hệ với chúng tôi</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Họ và tên
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Nhập họ và tên của bạn"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Nhập địa chỉ email của bạn"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Số điện thoại
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Nhập số điện thoại của bạn"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tin nhắn
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Nhập nội dung tin nhắn"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Gửi tin nhắn
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <div className="space-y-1 text-gray-600 dark:text-gray-400">
                        {item.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vị trí của chúng tôi</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Ghé thăm văn phòng của chúng tôi tại Hải Dương và Hà Nội
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785449544!2d106.29576281924847!3d20.937159147965494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359b933e76be65%3A0x2c3a7d1ac0e2fd79!2zSOG6o2kgRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1710900000000!5m2!1svi!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 