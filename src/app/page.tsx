import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Shield, ThumbsUp } from "lucide-react";

export const metadata = {
  title:
    "Nhà xe Hải Dương - Tuyến Hải Dương đi Hà Nội | Xe khách chất lượng cao",
  description:
    "Dịch vụ xe khách chất lượng cao tuyến Hải Dương - Hà Nội. Đặt vé dễ dàng, lịch trình đa dạng, phục vụ 24/7 với đội ngũ lái xe chuyên nghiệp.",
  keywords:
    "xe khách Hải Dương Hà Nội, nhà xe Hải Dương, vé xe Hải Dương Hà Nội, xe khách chất lượng cao",
};

export default function Home() {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Lịch trình đa dạng",
      description:
        "Nhiều chuyến xe trong ngày, phục vụ 24/7 để đáp ứng nhu cầu di chuyển của bạn",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "An toàn tối đa",
      description:
        "Đội ngũ lái xe chuyên nghiệp, xe đời mới được bảo dưỡng định kỳ",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Điểm đón trả thuận tiện",
      description:
        "Nhiều điểm đón trả khách tại các vị trí trung tâm, dễ dàng di chuyển",
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-primary" />,
      title: "Dịch vụ chất lượng",
      description:
        "Xe đời mới, ghế ngồi thoải mái, wifi miễn phí, nước uống, khăn lạnh",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center">
          <Image
            src="/images/hero-bg.jpg"
            alt="Xe khách chất lượng cao Hải Dương Hà Nội"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Hải Dương - Hà Nội
                <br />
                Hành trình an toàn, đáng tin cậy
              </h1>
              <p className="text-lg mb-8 text-gray-200">
                Dịch vụ xe khách chất lượng cao, đưa bạn đến điểm đến an toàn và
                thoải mái
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/schedule">Xem lịch trình</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Tại sao chọn Nhà xe Hải Dương?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Chúng tôi cam kết mang đến trải nghiệm di chuyển tốt nhất cho
                hành khách
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Sẵn sàng cho chuyến đi của bạn?
            </h2>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/booking">Đặt vé ngay</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
