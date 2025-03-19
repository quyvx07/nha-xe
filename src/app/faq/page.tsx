import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata = {
  title: 'Câu hỏi thường gặp | Nhà xe Hải Dương',
  description: 'Các câu hỏi thường gặp về dịch vụ xe khách Hải Dương - Hà Nội. Thông tin về đặt vé, hành lý, chính sách hoàn hủy và các vấn đề khác.',
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Câu hỏi thường gặp</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Đặt vé & Thanh toán</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Làm thế nào để đặt vé?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bạn có thể đặt vé qua website, gọi điện trực tiếp hoặc đến văn phòng của chúng tôi. Khi đặt vé online, bạn cần cung cấp thông tin cá nhân và chọn chuyến xe phù hợp.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Có những hình thức thanh toán nào?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Chúng tôi chấp nhận thanh toán qua:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Chuyển khoản ngân hàng</li>
                      <li>Ví điện tử (MoMo, ZaloPay)</li>
                      <li>Tiền mặt tại văn phòng</li>
                      <li>Thẻ ATM nội địa/Credit Card</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Hành lý & Dịch vụ</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Quy định về hành lý như thế nào?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Mỗi hành khách được mang theo miễn phí 20kg hành lý. Hành lý vượt quá quy định sẽ tính phí phụ thu theo quy định. Không vận chuyển hàng cấm, dễ cháy nổ.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Có dịch vụ đón/trả tận nơi không?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Có, chúng tôi có dịch vụ đón/trả khách tận nơi trong phạm vi thành phố với phụ phí hợp lý. Vui lòng thông báo trước khi đặt vé.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Hoàn hủy & Đổi vé</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Chính sách hoàn hủy vé như thế nào?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      - Hủy trước 24h: hoàn 90% giá vé<br />
                      - Hủy trước 12h: hoàn 70% giá vé<br />
                      - Hủy trước 6h: hoàn 50% giá vé<br />
                      - Hủy dưới 6h: không hoàn tiền
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Có thể đổi giờ xe không?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Có thể đổi giờ xe trước 6 tiếng so với giờ khởi hành, không tính phí đổi vé lần đầu. Từ lần thứ 2 sẽ tính phí 10% giá vé.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Các vấn đề khác</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Làm sao để theo dõi lịch trình xe?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bạn có thể theo dõi lịch trình xe thông qua ứng dụng của chúng tôi hoặc liên hệ tổng đài để được cập nhật thông tin.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Quy định về trẻ em?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      - Trẻ em dưới 6 tuổi: miễn phí (không có ghế)<br />
                      - Trẻ em từ 6-10 tuổi: 75% giá vé<br />
                      - Trên 10 tuổi: tính như người lớn
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 