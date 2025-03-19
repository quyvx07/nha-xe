import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata = {
  title: 'Điều khoản sử dụng | Nhà xe Hải Dương',
  description: 'Điều khoản và điều kiện sử dụng dịch vụ của Nhà xe Hải Dương. Quy định về đặt vé, hủy vé, và các chính sách liên quan.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Điều khoản sử dụng</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Quy định đặt vé</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Khách hàng cần cung cấp thông tin chính xác khi đặt vé</li>
                  <li>Mỗi vé chỉ có giá trị sử dụng một lần cho chuyến xe đã đặt</li>
                  <li>Vé không được chuyển nhượng cho người khác</li>
                  <li>Cần đặt vé trước ít nhất 2 giờ trước giờ khởi hành</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Chính sách hủy vé</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hủy vé trước 24 giờ: hoàn tiền 100%</li>
                  <li>Hủy vé từ 12-24 giờ: hoàn tiền 70%</li>
                  <li>Hủy vé từ 2-12 giờ: hoàn tiền 50%</li>
                  <li>Hủy vé dưới 2 giờ: không hoàn tiền</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Quy định hành lý</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mỗi hành khách được mang theo 20kg hành lý miễn phí</li>
                  <li>Không vận chuyển hàng cấm, dễ cháy nổ</li>
                  <li>Hành lý quá khổ cần báo trước và tính phí bổ sung</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Trách nhiệm của hành khách</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Có mặt tại điểm đón trước 15 phút</li>
                  <li>Tuân thủ hướng dẫn của nhân viên xe</li>
                  <li>Giữ gìn vệ sinh trên xe</li>
                  <li>Không hút thuốc, uống rượu bia trên xe</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Điều khoản thay đổi</h2>
                <p>
                  Nhà xe có quyền thay đổi các điều khoản này mà không cần báo trước. 
                  Việc tiếp tục sử dụng dịch vụ của chúng tôi đồng nghĩa với việc bạn 
                  chấp nhận những thay đổi này.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 