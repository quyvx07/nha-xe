"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { TrendingUp, UserCheck, Car, Calendar, ArrowUp, ArrowDown } from "lucide-react";

interface ChartData {
  name: string;
  total: number;
}

// Mock data for chart
const chartData: ChartData[] = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 1900 },
  { name: "Mar", total: 1500 },
  { name: "Apr", total: 1700 },
  { name: "May", total: 2300 },
  { name: "Jun", total: 2100 }
];

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col space-y-4 pb-16 md:pb-0 md:space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Tổng quan về hoạt động kinh doanh của nhà xe.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview" className="text-sm py-2.5 md:text-base">
            Tổng quan
          </TabsTrigger>
          <TabsTrigger value="analytics" className="text-sm py-2.5 md:text-base">
            Thống kê chi tiết
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          {/* Quick stats in a scrollable row on mobile */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium truncate">Doanh thu hôm nay</h3>
                  <div className="p-2 bg-primary/10 rounded-full">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="text-lg sm:text-2xl font-bold">₫4.2M</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500 font-medium">12%</span> so với hôm qua
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium truncate">Chuyến xe hôm nay</h3>
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Car className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="text-lg sm:text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowDown className="h-3 w-3 mr-1 text-red-500" />
                  <span className="text-red-500 font-medium">4%</span> so với hôm qua
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium truncate">Tổng số khách</h3>
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="text-lg sm:text-2xl font-bold">384</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="text-green-500 font-medium">8%</span> so với hôm qua
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium truncate">Tài xế hoạt động</h3>
                  <div className="p-2 bg-primary/10 rounded-full">
                    <UserCheck className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="text-lg sm:text-2xl font-bold">7/8</div>
                <p className="text-xs text-muted-foreground mt-1">1 tài xế nghỉ phép</p>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Chart */}
          <Card className="col-span-2">
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="text-base font-medium">Doanh thu theo tháng</CardTitle>
                  <CardDescription>Doanh thu 6 tháng gần nhất</CardDescription>
                </div>
                <div className="text-sm font-medium text-primary mt-2 sm:mt-0">₫12.7M</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                    <Bar dataKey="total" fill="#0891b2" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent Trips */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Các chuyến xe gần đây</CardTitle>
              <CardDescription>5 chuyến xe gần đây nhất</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-sm">Hải Dương - Hà Nội</p>
                      <p className="text-xs text-muted-foreground">
                        {i % 2 === 0 ? "Đã hoàn thành" : "Đang thực hiện"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{new Date().toLocaleDateString()}</p>
                      <p className="text-sm font-medium mt-0.5">{i % 2 === 0 ? "12 khách" : "8 khách"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Thống kê chi tiết</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground text-sm">
                Báo cáo thống kê chi tiết sẽ hiển thị ở đây
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
