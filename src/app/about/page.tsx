import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

export const metadata = {
  title: 'Về chúng tôi | Nhà xe Hải Dương - Tuyến Hải Dương đi Hà Nội',
  description: 'Tìm hiểu về lịch sử, sứ mệnh và giá trị cốt lõi của Nhà xe Hải Dương. Chúng tôi tự hào mang đến dịch vụ vận tải hành khách chất lượng cao trên tuyến Hải Dương - Hà Nội.',
};

export default function AboutPage() {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: '100,000+',
      label: 'Khách hàng tin tưởng'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      value: '10+',
      label: 'Năm kinh nghiệm'
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      value: '50+',
      label: 'Xe chất lượng cao'
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-primary" />,
      value: '98%',
      label: 'Khách hàng hài lòng'
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
              <h1 className="text-4xl font-bold mb-6">Về Nhà xe Hải Dương</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Hơn 10 năm kinh nghiệm phục vụ hành khách trên tuyến Hải Dương - Hà Nội
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/images/about-image.jpg"
                  alt="Đội ngũ nhà xe Hải Dương"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Câu chuyện của chúng tôi</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Nhà xe Hải Dương được thành lập từ năm 2013, với sứ mệnh mang đến dịch vụ vận tải hành khách chất lượng cao, an toàn và đáng tin cậy trên tuyến Hải Dương - Hà Nội.
                  </p>
                  <p>
                    Trải qua hơn 10 năm hoạt động, chúng tôi không ngừng đầu tư vào đội xe hiện đại, nâng cao chất lượng dịch vụ và xây dựng đội ngũ nhân viên chuyên nghiệp.
                  </p>
                  <p>
                    Với phương châm "An toàn - Tận tâm - Chuyên nghiệp", chúng tôi cam kết mang đến trải nghiệm di chuyển tốt nhất cho mọi hành khách.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Giá trị cốt lõi</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Những giá trị định hình nên dịch vụ và cam kết của chúng tôi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">An toàn</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Đặt sự an toàn của hành khách lên hàng đầu trong mọi hành trình
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Tận tâm</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Phục vụ hành khách với tinh thần tận tụy và chu đáo nhất
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Chuyên nghiệp</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Đội ngũ nhân viên được đào tạo chuyên nghiệp, tận tâm với nghề
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
