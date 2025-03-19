import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  FiEdit,
  FiPlus,
  FiSearch,
  FiEye,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

interface Booking {
  id: string;
  customerName: string;
  phone: string;
  tripRoute: string;
  tripDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  status: string;
  paymentStatus: string;
  price: number;
  passengers: number;
}

// Mock data
const bookings: Booking[] = [
  {
    id: "1",
    customerName: "Nguyễn Thị A",
    phone: "0987654321",
    tripRoute: "Hải Dương - Hà Nội",
    tripDate: "2023-06-15T08:00:00",
    pickupLocation: "Bến xe Hải Dương",
    dropoffLocation: "Giáp Bát, Hà Nội",
    status: "CONFIRMED",
    paymentStatus: "PAID",
    price: 120000,
    passengers: 1,
  },
  {
    id: "2",
    customerName: "Trần Văn B",
    phone: "0123456789",
    tripRoute: "Hà Nội - Hải Dương",
    tripDate: "2023-06-15T15:30:00",
    pickupLocation: "Mỹ Đình, Hà Nội",
    dropoffLocation: "Trung tâm Hải Dương",
    status: "PENDING",
    paymentStatus: "UNPAID",
    price: 120000,
    passengers: 2,
  },
  {
    id: "3",
    customerName: "Lê Thị C",
    phone: "0369852147",
    tripRoute: "Hải Dương - Hà Nội",
    tripDate: "2023-06-16T07:00:00",
    pickupLocation: "Chợ Hải Dương",
    dropoffLocation: "Cầu Giấy, Hà Nội",
    status: "CONFIRMED",
    paymentStatus: "PAID",
    price: 100000,
    passengers: 1,
  },
  {
    id: "4",
    customerName: "Phạm Văn D",
    phone: "0321654987",
    tripRoute: "Hải Dương - Hà Nội",
    tripDate: "2023-06-16T10:00:00",
    pickupLocation: "KCN Hải Dương",
    dropoffLocation: "Long Biên, Hà Nội",
    status: "COMPLETED",
    paymentStatus: "PAID",
    price: 120000,
    passengers: 1,
  },
  {
    id: "5",
    customerName: "Hoàng Văn E",
    phone: "0912345678",
    tripRoute: "Hà Nội - Hải Dương",
    tripDate: "2023-06-16T18:00:00",
    pickupLocation: "Mỹ Đình, Hà Nội",
    dropoffLocation: "Trung tâm Hải Dương",
    status: "CANCELLED",
    paymentStatus: "REFUNDED",
    price: 120000,
    passengers: 1,
  },
];

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("vi-VN");
  const formattedTime = date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formattedTime} - ${formattedDate}`;
}

// Helper function to format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

// Helper function to get status badge variant
function getStatusBadgeVariant(
  status: string
): "default" | "destructive" | "outline" | "secondary" {
  switch (status) {
    case "CONFIRMED":
      return "default";
    case "PENDING":
      return "outline";
    case "COMPLETED":
      return "default";
    case "CANCELLED":
      return "destructive";
    default:
      return "secondary";
  }
}

// Helper function to get status text in Vietnamese
function getStatusText(status: string): string {
  switch (status) {
    case "CONFIRMED":
      return "Đã xác nhận";
    case "PENDING":
      return "Chờ xác nhận";
    case "COMPLETED":
      return "Hoàn thành";
    case "CANCELLED":
      return "Đã hủy";
    default:
      return status;
  }
}

// Helper function to get payment status text in Vietnamese
function getPaymentStatusText(status: string): string {
  switch (status) {
    case "PAID":
      return "Đã thanh toán";
    case "UNPAID":
      return "Chưa thanh toán";
    case "REFUNDED":
      return "Đã hoàn tiền";
    default:
      return status;
  }
}

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold tracking-tight">Quản lý đặt vé</h3>
        <Link href="/admin/bookings/new">
          <Button>
            <FiPlus className="mr-2 h-4 w-4" /> Đặt vé mới
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách đặt vé</CardTitle>
          <CardDescription>
            Quản lý thông tin đặt vé của khách hàng
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <div className="relative w-full max-w-sm">
              <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm theo tên, SĐT..."
                className="pl-8 w-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <Button variant="outline">Lọc theo ngày</Button>
              <Button variant="outline">Lọc theo trạng thái</Button>
              <Button variant="outline">Xuất Excel</Button>
            </div>
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Khách hàng</TableHead>
                  <TableHead>Chuyến xe</TableHead>
                  <TableHead>Thời gian</TableHead>
                  <TableHead>Địa điểm đón</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Thanh toán</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">
                          {booking.customerName}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {booking.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{booking.tripRoute}</TableCell>
                    <TableCell>{formatDate(booking.tripDate)}</TableCell>
                    <TableCell>
                      <div title={`Điểm đến: ${booking.dropoffLocation}`}>
                        {booking.pickupLocation}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(booking.status)}>
                        {getStatusText(booking.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div>{getPaymentStatusText(booking.paymentStatus)}</div>
                        <div className="text-sm text-muted-foreground">
                          {formatCurrency(booking.price)} ({booking.passengers}{" "}
                          khách)
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="icon">
                          <FiEye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <FiEdit className="h-4 w-4" />
                        </Button>
                        {booking.status === "PENDING" && (
                          <>
                            <Button
                              variant="outline"
                              size="icon"
                              className="text-green-600"
                            >
                              <FiCheckCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="text-red-600"
                            >
                              <FiXCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="text-sm text-muted-foreground">
              Hiển thị <span className="font-medium">1</span> đến{" "}
              <span className="font-medium">5</span> của{" "}
              <span className="font-medium">20</span> bản ghi
            </div>
            <Button variant="outline" size="sm">
              Trước
            </Button>
            <Button variant="outline" size="sm">
              Tiếp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
