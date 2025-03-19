import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FiBarChart2, FiCalendar, FiDownload, FiFilter } from "react-icons/fi";
import { Button } from "@/components/ui/button";

interface DailyRevenue {
  date: string;
  trips: number;
  bookings: number;
  revenue: number;
  expenses: number;
  profit: number;
}

interface DriverRevenue {
  id: string;
  name: string;
  trips: number;
  totalBookings: number;
  totalRevenue: number;
}

interface RouteRevenue {
  id: string;
  name: string;
  trips: number;
  totalBookings: number;
  totalRevenue: number;
}

// Mock data for daily revenue
const dailyRevenue: DailyRevenue[] = [
  { date: "2023-06-19", trips: 25, bookings: 320, revenue: 38400000, expenses: 15000000, profit: 23400000 },
  { date: "2023-06-18", trips: 24, bookings: 310, revenue: 37200000, expenses: 14800000, profit: 22400000 },
  { date: "2023-06-17", trips: 26, bookings: 335, revenue: 40200000, expenses: 15500000, profit: 24700000 },
  { date: "2023-06-16", trips: 24, bookings: 318, revenue: 38160000, expenses: 14900000, profit: 23260000 },
  { date: "2023-06-15", trips: 25, bookings: 325, revenue: 39000000, expenses: 15200000, profit: 23800000 },
  { date: "2023-06-14", trips: 23, bookings: 300, revenue: 36000000, expenses: 14500000, profit: 21500000 },
  { date: "2023-06-13", trips: 24, bookings: 315, revenue: 37800000, expenses: 14800000, profit: 23000000 },
];

// Mock data for driver revenue
const driverRevenue: DriverRevenue[] = [
  { id: "1", name: "Nguyễn Văn A", trips: 15, totalBookings: 190, totalRevenue: 22800000 },
  { id: "2", name: "Trần Văn B", trips: 14, totalBookings: 175, totalRevenue: 21000000 },
  { id: "3", name: "Lê Văn C", trips: 16, totalBookings: 200, totalRevenue: 24000000 },
  { id: "4", name: "Phạm Văn D", trips: 13, totalBookings: 165, totalRevenue: 19800000 },
  { id: "5", name: "Hoàng Văn E", trips: 15, totalBookings: 185, totalRevenue: 22200000 },
];

// Mock data for route revenue
const routeRevenue: RouteRevenue[] = [
  { id: "1", name: "Hải Dương - Hà Nội", trips: 40, totalBookings: 520, totalRevenue: 62400000 },
  { id: "2", name: "Hà Nội - Hải Dương", trips: 40, totalBookings: 510, totalRevenue: 61200000 },
  { id: "3", name: "Hải Dương - Mỹ Đình", trips: 25, totalBookings: 300, totalRevenue: 39000000 },
  { id: "4", name: "Mỹ Đình - Hải Dương", trips: 25, totalBookings: 290, totalRevenue: 37700000 },
  { id: "5", name: "Hải Dương - Nội Bài", trips: 10, totalBookings: 80, totalRevenue: 12000000 },
];

// Helper function to format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN");
}

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Báo cáo doanh thu</h2>
        <p className="text-muted-foreground">
          Thống kê doanh thu theo ngày, tháng, tài xế và tuyến đường
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-2">
          <Button variant="outline">
            <FiCalendar className="mr-2 h-4 w-4" /> Thời gian
          </Button>
          <Button variant="outline">
            <FiFilter className="mr-2 h-4 w-4" /> Lọc
          </Button>
        </div>
        <Button variant="outline">
          <FiDownload className="mr-2 h-4 w-4" /> Xuất báo cáo
        </Button>
      </div>

      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList>
          <TabsTrigger value="daily">Doanh thu theo ngày</TabsTrigger>
          <TabsTrigger value="monthly">Doanh thu theo tháng</TabsTrigger>
          <TabsTrigger value="driver">Doanh thu theo tài xế</TabsTrigger>
          <TabsTrigger value="route">Doanh thu theo tuyến</TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <Card>
            <CardHeader>
              <CardTitle>Doanh thu theo ngày</CardTitle>
              <CardDescription>
                Báo cáo doanh thu 7 ngày gần nhất
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-6">
                <Card>
                  <CardHeader className="py-4">
                    <CardTitle className="text-sm font-medium">
                      Tổng doanh thu
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-2">
                    <div className="text-2xl font-bold">
                      {formatCurrency(dailyRevenue.reduce((sum, day) => sum + day.revenue, 0))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      7 ngày gần nhất
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="py-4">
                    <CardTitle className="text-sm font-medium">
                      Tổng lợi nhuận
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-2">
                    <div className="text-2xl font-bold">
                      {formatCurrency(dailyRevenue.reduce((sum, day) => sum + day.profit, 0))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      7 ngày gần nhất
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="py-4">
                    <CardTitle className="text-sm font-medium">
                      Tổng số vé
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-2">
                    <div className="text-2xl font-bold">
                      {dailyRevenue.reduce((sum, day) => sum + day.bookings, 0)} vé
                    </div>
                    <p className="text-xs text-muted-foreground">
                      7 ngày gần nhất
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ngày</TableHead>
                      <TableHead>Số chuyến</TableHead>
                      <TableHead>Số vé</TableHead>
                      <TableHead>Doanh thu</TableHead>
                      <TableHead>Chi phí</TableHead>
                      <TableHead>Lợi nhuận</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dailyRevenue.map((day) => (
                      <TableRow key={day.date}>
                        <TableCell className="font-medium">
                          {formatDate(day.date)}
                        </TableCell>
                        <TableCell>{day.trips}</TableCell>
                        <TableCell>{day.bookings}</TableCell>
                        <TableCell>{formatCurrency(day.revenue)}</TableCell>
                        <TableCell>{formatCurrency(day.expenses)}</TableCell>
                        <TableCell>{formatCurrency(day.profit)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly">
          <Card>
            <CardHeader>
              <CardTitle>Doanh thu theo tháng</CardTitle>
              <CardDescription>
                Báo cáo doanh thu các tháng trong năm
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
              <div className="flex flex-col items-center">
                <FiBarChart2 className="h-16 w-16 mb-4" />
                <p>Biểu đồ doanh thu theo tháng sẽ hiển thị ở đây</p>
                <p className="text-xs mt-2">(Đang phát triển...)</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="driver">
          <Card>
            <CardHeader>
              <CardTitle>Doanh thu theo tài xế</CardTitle>
              <CardDescription>
                Báo cáo doanh thu theo từng tài xế (tháng hiện tại)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tài xế</TableHead>
                      <TableHead>Số chuyến</TableHead>
                      <TableHead>Số vé</TableHead>
                      <TableHead>Doanh thu</TableHead>
                      <TableHead className="text-right">Tỷ lệ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {driverRevenue.map((driver) => {
                      const totalRevenue = driverRevenue.reduce((sum, d) => sum + d.totalRevenue, 0);
                      const percentage = ((driver.totalRevenue / totalRevenue) * 100).toFixed(1);
                      
                      return (
                        <TableRow key={driver.id}>
                          <TableCell className="font-medium">
                            {driver.name}
                          </TableCell>
                          <TableCell>{driver.trips}</TableCell>
                          <TableCell>{driver.totalBookings}</TableCell>
                          <TableCell>{formatCurrency(driver.totalRevenue)}</TableCell>
                          <TableCell className="text-right">{percentage}%</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="route">
          <Card>
            <CardHeader>
              <CardTitle>Doanh thu theo tuyến đường</CardTitle>
              <CardDescription>
                Báo cáo doanh thu theo từng tuyến đường (tháng hiện tại)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tuyến đường</TableHead>
                      <TableHead>Số chuyến</TableHead>
                      <TableHead>Số vé</TableHead>
                      <TableHead>Doanh thu</TableHead>
                      <TableHead className="text-right">Tỷ lệ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {routeRevenue.map((route) => {
                      const totalRevenue = routeRevenue.reduce((sum, r) => sum + r.totalRevenue, 0);
                      const percentage = ((route.totalRevenue / totalRevenue) * 100).toFixed(1);
                      
                      return (
                        <TableRow key={route.id}>
                          <TableCell className="font-medium">
                            {route.name}
                          </TableCell>
                          <TableCell>{route.trips}</TableCell>
                          <TableCell>{route.totalBookings}</TableCell>
                          <TableCell>{formatCurrency(route.totalRevenue)}</TableCell>
                          <TableCell className="text-right">{percentage}%</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}