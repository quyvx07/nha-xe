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
  FiCalendar,
  FiEdit,
  FiEye,
  FiPlus,
  FiSearch,
  FiX,
} from "react-icons/fi";

interface Trip {
  id: string;
  routeName: string;
  vehiclePlate: string;
  driverName: string;
  date: string;
  startTime: string;
  endTime: string | null;
  status: string;
  seats: number;
  bookedSeats: number;
  departurePoint: string;
  arrivalPoint: string;
}

// Mock data
const trips: Trip[] = [
  {
    id: "1",
    routeName: "Hải Dương - Hà Nội",
    vehiclePlate: "34A-12345",
    driverName: "Nguyễn Văn A",
    date: "2023-06-20",
    startTime: "2023-06-20T07:00:00",
    endTime: "2023-06-20T08:30:00",
    status: "SCHEDULED",
    seats: 16,
    bookedSeats: 10,
    departurePoint: "Bến xe Hải Dương",
    arrivalPoint: "Bến xe Giáp Bát, Hà Nội",
  },
  {
    id: "2",
    routeName: "Hà Nội - Hải Dương",
    vehiclePlate: "34B-54321",
    driverName: "Trần Văn B",
    date: "2023-06-20",
    startTime: "2023-06-20T09:00:00",
    endTime: "2023-06-20T10:30:00",
    status: "IN_PROGRESS",
    seats: 16,
    bookedSeats: 14,
    departurePoint: "Bến xe Giáp Bát, Hà Nội",
    arrivalPoint: "Bến xe Hải Dương",
  },
  {
    id: "3",
    routeName: "Hải Dương - Hà Nội",
    vehiclePlate: "34C-67890",
    driverName: "Lê Văn C",
    date: "2023-06-20",
    startTime: "2023-06-20T13:00:00",
    endTime: "2023-06-20T14:30:00",
    status: "SCHEDULED",
    seats: 29,
    bookedSeats: 15,
    departurePoint: "Bến xe Hải Dương",
    arrivalPoint: "Bến xe Mỹ Đình, Hà Nội",
  },
  {
    id: "4",
    routeName: "Hà Nội - Hải Dương",
    vehiclePlate: "34D-45678",
    driverName: "Phạm Văn D",
    date: "2023-06-19",
    startTime: "2023-06-19T15:00:00",
    endTime: "2023-06-19T16:30:00",
    status: "COMPLETED",
    seats: 16,
    bookedSeats: 12,
    departurePoint: "Bến xe Mỹ Đình, Hà Nội",
    arrivalPoint: "Bến xe Hải Dương",
  },
  {
    id: "5",
    routeName: "Hải Dương - Nội Bài",
    vehiclePlate: "34H-98765",
    driverName: "Hoàng Văn E",
    date: "2023-06-19",
    startTime: "2023-06-19T18:00:00",
    endTime: null,
    status: "CANCELLED",
    seats: 29,
    bookedSeats: 5,
    departurePoint: "Bến xe Hải Dương",
    arrivalPoint: "Sân bay Nội Bài, Hà Nội",
  },
];

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN");
}

// Helper function to format time
function formatTime(dateString: string | null): string {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Helper function to get status badge variant
function getStatusBadgeVariant(
  status: string
): "default" | "destructive" | "outline" | "secondary" {
  switch (status) {
    case "SCHEDULED":
      return "secondary";
    case "IN_PROGRESS":
      return "default";
    case "COMPLETED":
      return "outline";
    case "CANCELLED":
      return "destructive";
    default:
      return "secondary";
  }
}

// Helper function to get status text in Vietnamese
function getStatusText(status: string): string {
  switch (status) {
    case "SCHEDULED":
      return "Đã lên lịch";
    case "IN_PROGRESS":
      return "Đang thực hiện";
    case "COMPLETED":
      return "Đã hoàn thành";
    case "CANCELLED":
      return "Đã hủy";
    default:
      return status;
  }
}

export default function TripsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold tracking-tight">Quản lý chuyến xe</h3>
        <Link href="/admin/trips/new">
          <Button>
            <FiPlus className="mr-2 h-4 w-4" /> Thêm chuyến xe
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách chuyến xe</CardTitle>
          <CardDescription>
            Quản lý thông tin các chuyến xe theo ngày
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <div className="relative w-full max-w-sm">
              <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm chuyến xe..."
                className="pl-8 w-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <Button variant="outline">
                <FiCalendar className="mr-2 h-4 w-4" /> Lọc theo ngày
              </Button>
              <Button variant="outline">Lọc theo tuyến</Button>
              <Button variant="outline">Xuất Excel</Button>
            </div>
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tuyến đường</TableHead>
                  <TableHead>Ngày</TableHead>
                  <TableHead>Giờ đi</TableHead>
                  <TableHead>Xe</TableHead>
                  <TableHead>Tài xế</TableHead>
                  <TableHead>Ghế đã đặt</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trips.map((trip) => (
                  <TableRow key={trip.id}>
                    <TableCell className="font-medium">
                      <div className="font-medium">{trip.routeName}</div>
                      <div className="text-xs text-muted-foreground">
                        {trip.departurePoint} → {trip.arrivalPoint}
                      </div>
                    </TableCell>
                    <TableCell>{formatDate(trip.date)}</TableCell>
                    <TableCell>
                      {formatTime(trip.startTime)}
                      {trip.status !== "CANCELLED" && trip.endTime && (
                        <span className="text-xs text-muted-foreground">
                          {" "}
                          - {formatTime(trip.endTime)}
                        </span>
                      )}
                    </TableCell>
                    <TableCell>{trip.vehiclePlate}</TableCell>
                    <TableCell>{trip.driverName}</TableCell>
                    <TableCell>
                      {trip.bookedSeats}/{trip.seats}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(trip.status)}>
                        {getStatusText(trip.status)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="icon">
                          <FiEye className="h-4 w-4" />
                        </Button>
                        {trip.status !== "COMPLETED" &&
                          trip.status !== "CANCELLED" && (
                            <>
                              <Button variant="outline" size="icon">
                                <FiEdit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon">
                                <FiX className="h-4 w-4" />
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
