import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FiMapPin, FiClock, FiUser, FiPhone, FiCheckCircle, FiXCircle } from "react-icons/fi";

// Mock data
const todayTrips = [
  {
    id: "1",
    route: "Hải Dương - Hà Nội",
    departureTime: "06:00",
    arrivalTime: "07:30",
    departurePoint: "Bến xe Hải Dương",
    arrivalPoint: "Bến xe Mỹ Đình",
    status: "UPCOMING",
    bookings: 18,
    capacity: 25,
  },
  {
    id: "2",
    route: "Hà Nội - Hải Dương",
    departureTime: "14:30",
    arrivalTime: "16:00",
    departurePoint: "Bến xe Mỹ Đình",
    arrivalPoint: "Bến xe Hải Dương",
    status: "UPCOMING",
    bookings: 12,
    capacity: 25,
  },
];

const upcomingTrips = [
  {
    id: "3",
    date: "2023-06-20",
    route: "Hải Dương - Hà Nội",
    departureTime: "06:00",
    arrivalTime: "07:30",
    departurePoint: "Bến xe Hải Dương",
    arrivalPoint: "Bến xe Mỹ Đình",
    status: "SCHEDULED",
    bookings: 15,
    capacity: 25,
  },
  {
    id: "4",
    date: "2023-06-20",
    route: "Hà Nội - Hải Dương",
    departureTime: "14:30",
    arrivalTime: "16:00",
    departurePoint: "Bến xe Mỹ Đình",
    arrivalPoint: "Bến xe Hải Dương",
    status: "SCHEDULED",
    bookings: 8,
    capacity: 25,
  },
  {
    id: "5",
    date: "2023-06-21",
    route: "Hải Dương - Hà Nội",
    departureTime: "08:30",
    arrivalTime: "10:00",
    departurePoint: "Bến xe Hải Dương",
    arrivalPoint: "Bến xe Mỹ Đình",
    status: "SCHEDULED",
    bookings: 20,
    capacity: 25,
  },
];

const completedTrips = [
  {
    id: "6",
    date: "2023-06-18",
    route: "Hải Dương - Hà Nội",
    departureTime: "06:00",
    arrivalTime: "07:30",
    departurePoint: "Bến xe Hải Dương",
    arrivalPoint: "Bến xe Mỹ Đình",
    status: "COMPLETED",
    bookings: 25,
    capacity: 25,
  },
  {
    id: "7",
    date: "2023-06-18",
    route: "Hà Nội - Hải Dương",
    departureTime: "14:30",
    arrivalTime: "16:00",
    departurePoint: "Bến xe Mỹ Đình",
    arrivalPoint: "Bến xe Hải Dương",
    status: "COMPLETED",
    bookings: 18,
    capacity: 25,
  },
];

const passengers = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    phone: "0987654321",
    pickupLocation: "Bến xe Hải Dương",
    dropoffLocation: "Bến xe Mỹ Đình",
    bookingTime: "2023-06-18T10:30:00",
    status: "CONFIRMED",
  },
  {
    id: "2",
    name: "Trần Thị B",
    phone: "0123456789",
    pickupLocation: "Đón tại nhà: 123 Lê Lợi, Hải Dương",
    dropoffLocation: "Bến xe Mỹ Đình",
    bookingTime: "2023-06-18T11:45:00",
    status: "CONFIRMED",
  },
  {
    id: "3",
    name: "Phạm Văn C",
    phone: "0369852147",
    pickupLocation: "Bến xe Hải Dương",
    dropoffLocation: "Trả tại: 45 Nguyễn Trãi, Hà Nội",
    bookingTime: "2023-06-18T14:20:00",
    status: "PENDING",
  },
];

// Helper function to format date
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Helper function to get status badge variant
function getStatusBadgeVariant(status: string): "default" | "destructive" | "outline" | "secondary" {
  switch (status) {
    case "UPCOMING":
      return "default";
    case "SCHEDULED":
      return "secondary";
    case "COMPLETED":
      return "outline";
    case "CANCELLED":
      return "destructive";
    default:
      return "outline";
  }
}

// Helper function to get status text in Vietnamese
function getStatusText(status: string) {
  switch (status) {
    case "UPCOMING":
      return "Sắp khởi hành";
    case "SCHEDULED":
      return "Đã lên lịch";
    case "COMPLETED":
      return "Đã hoàn thành";
    case "CANCELLED":
      return "Đã hủy";
    case "CONFIRMED":
      return "Đã xác nhận";
    case "PENDING":
      return "Chờ xác nhận";
    default:
      return status;
  }
}

export default function DriverPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-950 shadow">
        <div className="container py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Nhà xe logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div>
              <h2 className="font-bold">Trần Văn B</h2>
              <p className="text-sm text-muted-foreground">Tài xế</p>
            </div>
          </div>
          <Button variant="outline">Đăng xuất</Button>
        </div>
      </div>
      
      <div className="container py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Chuyến hôm nay</CardTitle>
              <CardDescription>Số chuyến xe trong ngày</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{todayTrips.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Hành khách</CardTitle>
              <CardDescription>Tổng số hành khách hôm nay</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {todayTrips.reduce((sum, trip) => sum + trip.bookings, 0)}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Trạng thái xe</CardTitle>
              <CardDescription>Xe đang được sử dụng</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Badge>Hoạt động</Badge>
                <span className="text-sm text-muted-foreground">
                  29A-12345
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Chuyến đi hôm nay</CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString("vi-VN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tuyến đường</TableHead>
                    <TableHead>Thời gian</TableHead>
                    <TableHead>Điểm đón - trả</TableHead>
                    <TableHead>Hành khách</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {todayTrips.map((trip) => (
                    <TableRow key={trip.id}>
                      <TableCell className="font-medium">{trip.route}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <FiClock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {trip.departureTime} - {trip.arrivalTime}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1">
                            <FiMapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm">{trip.departurePoint}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm">{trip.arrivalPoint}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <FiUser className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {trip.bookings}/{trip.capacity}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(trip.status)}>
                          {getStatusText(trip.status)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8"
                            asChild
                          >
                            <Link href={`/driver/trips/${trip.id}`}>
                              Chi tiết
                            </Link>
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            className="h-8"
                            asChild
                          >
                            <Link href={`/driver/trips/${trip.id}/start`}>
                              Bắt đầu
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Danh sách hành khách</CardTitle>
            <CardDescription>
              Quản lý thông tin hành khách cho chuyến đi tiếp theo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Label htmlFor="trip-select" className="text-sm">
                  Chuyến xe:
                </Label>
                <Select defaultValue="1">
                  <SelectTrigger id="trip-select" className="w-[250px]">
                    <SelectValue placeholder="Chọn chuyến xe" />
                  </SelectTrigger>
                  <SelectContent>
                    {todayTrips.map((trip) => (
                      <SelectItem key={trip.id} value={trip.id}>
                        {trip.route} ({trip.departureTime})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button>Xuất danh sách</Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên hành khách</TableHead>
                    <TableHead>Số điện thoại</TableHead>
                    <TableHead>Điểm đón</TableHead>
                    <TableHead>Điểm trả</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {passengers.map((passenger) => (
                    <TableRow key={passenger.id}>
                      <TableCell className="font-medium">{passenger.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <FiPhone className="h-4 w-4 text-muted-foreground" />
                          <span>{passenger.phone}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <FiMapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{passenger.pickupLocation}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <FiMapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{passenger.dropoffLocation}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            passenger.status === "CONFIRMED" ? "default" : "secondary"
                          }
                        >
                          {getStatusText(passenger.status)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {passenger.status === "PENDING" ? (
                            <>
                              <Button
                                variant="default"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <FiCheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="destructive"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <FiXCircle className="h-4 w-4" />
                              </Button>
                            </>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8"
                            >
                              Chi tiết
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Lịch trình sắp tới</CardTitle>
            <CardDescription>
              Chuyến đi trong những ngày tới
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upcoming">Sắp tới</TabsTrigger>
                <TabsTrigger value="completed">Đã hoàn thành</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="space-y-4 pt-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ngày</TableHead>
                        <TableHead>Tuyến đường</TableHead>
                        <TableHead>Thời gian</TableHead>
                        <TableHead>Hành khách</TableHead>
                        <TableHead>Trạng thái</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingTrips.map((trip) => (
                        <TableRow key={trip.id}>
                          <TableCell>{formatDate(trip.date)}</TableCell>
                          <TableCell className="font-medium">{trip.route}</TableCell>
                          <TableCell>
                            {trip.departureTime} - {trip.arrivalTime}
                          </TableCell>
                          <TableCell>
                            {trip.bookings}/{trip.capacity}
                          </TableCell>
                          <TableCell>
                            <Badge variant={getStatusBadgeVariant(trip.status)}>
                              {getStatusText(trip.status)}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="completed" className="space-y-4 pt-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ngày</TableHead>
                        <TableHead>Tuyến đường</TableHead>
                        <TableHead>Thời gian</TableHead>
                        <TableHead>Hành khách</TableHead>
                        <TableHead>Trạng thái</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {completedTrips.map((trip) => (
                        <TableRow key={trip.id}>
                          <TableCell>{formatDate(trip.date)}</TableCell>
                          <TableCell className="font-medium">{trip.route}</TableCell>
                          <TableCell>
                            {trip.departureTime} - {trip.arrivalTime}
                          </TableCell>
                          <TableCell>
                            {trip.bookings}/{trip.capacity}
                          </TableCell>
                          <TableCell>
                            <Badge variant={getStatusBadgeVariant(trip.status)}>
                              {getStatusText(trip.status)}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 