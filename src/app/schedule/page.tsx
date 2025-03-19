import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Lịch trình | Nhà xe Hải Dương - Tuyến Hải Dương đi Hà Nội",
  description:
    "Lịch trình các chuyến xe từ Hải Dương đi Hà Nội và ngược lại. Thông tin chi tiết về giờ xuất bến, điểm đón trả khách và giá vé.",
};

const schedules = [
  {
    from: "Hải Dương",
    to: "Hà Nội",
    departurePoint: "Bến xe Hải Dương, 123 Đường ABC, TP. Hải Dương",
    arrivalPoint: "Bến xe Giáp Bát, Hà Nội",
    times: [
      "05:00",
      "06:30",
      "08:00",
      "09:30",
      "11:00",
      "13:30",
      "15:00",
      "16:30",
      "18:00",
    ],
    price: "120.000",
    duration: "90",
  },
  {
    from: "Hà Nội",
    to: "Hải Dương",
    departurePoint: "Bến xe Giáp Bát, Hà Nội",
    arrivalPoint: "Bến xe Hải Dương, 123 Đường ABC, TP. Hải Dương",
    times: [
      "05:30",
      "07:00",
      "08:30",
      "10:00",
      "11:30",
      "14:00",
      "15:30",
      "17:00",
      "18:30",
    ],
    price: "120.000",
    duration: "90",
  },
];

export default function SchedulePage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Lịch trình chuyến xe</h1>

            <div className="space-y-12">
              {schedules.map((schedule, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                >
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                    <h2 className="text-2xl font-semibold mb-2">
                      {schedule.from} - {schedule.to}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{schedule.duration} phút</span>
                      </div>
                      <div className="hidden sm:block text-gray-400">•</div>
                      <div>
                        <span className="font-medium">{schedule.price}đ</span>
                        /vé
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 mt-1 text-primary" />
                      <div>
                        <p className="font-medium">Điểm đón:</p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {schedule.departurePoint}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 mt-1 text-primary" />
                      <div>
                        <p className="font-medium">Điểm trả:</p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {schedule.arrivalPoint}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Giờ xuất bến:</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {schedule.times.map((time, timeIndex) => (
                        <div
                          key={timeIndex}
                          className="bg-gray-50 dark:bg-gray-700 rounded p-3 text-center"
                        >
                          <span className="font-medium">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Button>Đặt vé ngay</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Lưu ý:</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Lịch trình có thể thay đổi vào các dịp lễ, Tết</li>
                <li>Vui lòng có mặt tại điểm đón trước 15 phút</li>
                <li>Giá vé có thể thay đổi theo thời điểm</li>
                <li>Trẻ em dưới 6 tuổi được miễn phí (không có ghế)</li>
                <li>Quý khách có thể đặt vé trước qua website hoặc gọi điện</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
