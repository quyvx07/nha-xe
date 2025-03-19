import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata = {
  title: 'Chính sách bảo mật | Nhà xe Hải Dương',
  description: 'Chính sách bảo mật thông tin của Nhà xe Hải Dương. Cam kết bảo vệ thông tin cá nhân của khách hàng.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Chính sách bảo mật</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Thông tin chúng tôi thu thập</h2>
                <p className="mb-4">Khi bạn sử dụng dịch vụ của chúng tôi, chúng tôi có thể thu thập các thông tin sau:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Họ tên, số điện thoại, email</li>
                  <li>Thông tin đặt vé và lịch sử di chuyển</li>
                  <li>Thông tin thanh toán</li>
                  <li>Phản hồi và đánh giá của bạn</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Mục đích sử dụng thông tin</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Xử lý đơn đặt vé và cung cấp dịch vụ</li>
                  <li>Liên hệ trong trường hợp cần thiết</li>
                  <li>Gửi thông tin khuyến mãi (nếu được cho phép)</li>
                  <li>Cải thiện chất lượng dịch vụ</li>
                  <li>Phân tích và thống kê</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Bảo vệ thông tin</h2>
                <p className="mb-4">
                  Chúng tôi cam kết bảo vệ thông tin của bạn bằng các biện pháp:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mã hóa dữ liệu</li>
                  <li>Hạn chế quyền truy cập</li>
                  <li>Định kỳ rà soát và cập nhật biện pháp bảo mật</li>
                  <li>Đào tạo nhân viên về bảo mật thông tin</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Chia sẻ thông tin</h2>
                <p className="mb-4">
                  Chúng tôi không chia sẻ thông tin của bạn cho bên thứ ba, trừ các trường hợp:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Được sự đồng ý của bạn</li>
                  <li>Theo yêu cầu của pháp luật</li>
                  <li>Cần thiết để cung cấp dịch vụ</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Quyền của bạn</h2>
                <p className="mb-4">Bạn có quyền:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Yêu cầu truy cập thông tin của bạn</li>
                  <li>Yêu cầu chỉnh sửa thông tin không chính xác</li>
                  <li>Yêu cầu xóa thông tin</li>
                  <li>Từ chối nhận thông tin quảng cáo</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 