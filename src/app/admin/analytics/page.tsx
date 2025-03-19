'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { BarChart3, ArrowUpIcon, ArrowDownIcon, DownloadIcon, UsersIcon, CarIcon, ClockIcon, ActivityIcon, TrendingUpIcon, BanknoteIcon } from 'lucide-react';

// Giả định dữ liệu cho biểu đồ - trong dự án thực tế, dữ liệu này sẽ đến từ API
const revenueData = [
  { month: 'T1', value: 12000000 },
  { month: 'T2', value: 16000000 },
  { month: 'T3', value: 14000000 },
  { month: 'T4', value: 15000000 },
  { month: 'T5', value: 18000000 },
  { month: 'T6', value: 21000000 },
  { month: 'T7', value: 20000000 },
  { month: 'T8', value: 22000000 },
  { month: 'T9', value: 25000000 },
  { month: 'T10', value: 28000000 },
  { month: 'T11', value: 32000000 },
  { month: 'T12', value: 35000000 },
];

const bookingsData = [
  { month: 'T1', value: 120 },
  { month: 'T2', value: 160 },
  { month: 'T3', value: 140 },
  { month: 'T4', value: 150 },
  { month: 'T5', value: 180 },
  { month: 'T6', value: 210 },
  { month: 'T7', value: 200 },
  { month: 'T8', value: 220 },
  { month: 'T9', value: 250 },
  { month: 'T10', value: 280 },
  { month: 'T11', value: 320 },
  { month: 'T12', value: 350 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).format(value);
};

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('this-year');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Thống kê & Báo cáo</h1>
          <p className="text-muted-foreground">
            Phân tích dữ liệu hoạt động và theo dõi hiệu suất kinh doanh
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn thời gian" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Hôm nay</SelectItem>
              <SelectItem value="this-week">Tuần này</SelectItem>
              <SelectItem value="this-month">Tháng này</SelectItem>
              <SelectItem value="this-year">Năm 2024</SelectItem>
              <SelectItem value="last-year">Năm 2023</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <DownloadIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Thống kê tổng quan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">Tổng doanh thu</p>
                <h2 className="text-2xl font-bold">{formatCurrency(35000000)}</h2>
                <div className="flex items-center mt-1">
                  <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500 font-medium">12.5%</span>
                  <span className="text-xs text-muted-foreground ml-1">so với tháng trước</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <BanknoteIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">Tổng chuyến xe</p>
                <h2 className="text-2xl font-bold">1,240</h2>
                <div className="flex items-center mt-1">
                  <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500 font-medium">8.2%</span>
                  <span className="text-xs text-muted-foreground ml-1">so với tháng trước</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CarIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">Khách hàng mới</p>
                <h2 className="text-2xl font-bold">350</h2>
                <div className="flex items-center mt-1">
                  <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500 font-medium">18.7%</span>
                  <span className="text-xs text-muted-foreground ml-1">so với tháng trước</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <UsersIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">Tỷ lệ đúng giờ</p>
                <h2 className="text-2xl font-bold">92.5%</h2>
                <div className="flex items-center mt-1">
                  <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-xs text-red-500 font-medium">1.2%</span>
                  <span className="text-xs text-muted-foreground ml-1">so với tháng trước</span>
                </div>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <ClockIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Tabs Thống kê */}
      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue" className="flex items-center gap-2">
            <TrendingUpIcon className="h-4 w-4" />
            <span>Doanh thu</span>
          </TabsTrigger>
          <TabsTrigger value="bookings" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>Đặt vé</span>
          </TabsTrigger>
          <TabsTrigger value="routes" className="flex items-center gap-2">
            <ActivityIcon className="h-4 w-4" />
            <span>Tuyến phổ biến</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Phân tích doanh thu</CardTitle>
              <CardDescription>
                Biểu đồ doanh thu theo tháng của năm 2024
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-[350px] w-full">
                {/* Chart Component - thay bằng thư viện biểu đồ thực tế như Chart.js, Recharts, etc. */}
                <div className="h-full flex items-end space-x-2 pb-4 px-4">
                  {revenueData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-primary rounded-md" 
                        style={{ 
                          height: `${(data.value / Math.max(...revenueData.map(d => d.value))) * 300}px`,
                          transition: 'height 0.3s ease'
                        }}
                      ></div>
                      <span className="text-xs font-medium mt-2">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <p className="text-sm font-medium">Tổng doanh thu năm 2024</p>
                <p className="text-2xl font-bold">{formatCurrency(revenueData.reduce((total, current) => total + current.value, 0))}</p>
              </div>
              <Button variant="outline">Xem chi tiết</Button>
            </CardFooter>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Phân bổ doanh thu</CardTitle>
                <CardDescription>
                  Theo loại dịch vụ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium">Vé khứ hồi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">45%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-medium">Vé một chiều</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">30%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Gói tháng</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">15%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm font-medium">Khác</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">10%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Phương thức thanh toán</CardTitle>
                <CardDescription>
                  Thống kê theo phương thức thanh toán
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium">Tiền mặt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">40%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-medium">Chuyển khoản</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">35%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Ví điện tử</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">20%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm font-medium">QR Code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">5%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: '5%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="bookings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Thống kê lượt đặt vé</CardTitle>
              <CardDescription>
                Biểu đồ lượt đặt vé theo tháng của năm 2024
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-[350px] w-full">
                {/* Chart Component - thay bằng thư viện biểu đồ thực tế như Chart.js, Recharts, etc. */}
                <div className="h-full flex items-end space-x-2 pb-4 px-4">
                  {bookingsData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-blue-500 rounded-md" 
                        style={{ 
                          height: `${(data.value / Math.max(...bookingsData.map(d => d.value))) * 300}px`,
                          transition: 'height 0.3s ease'
                        }}
                      ></div>
                      <span className="text-xs font-medium mt-2">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <p className="text-sm font-medium">Tổng lượt đặt vé năm 2024</p>
                <p className="text-2xl font-bold">{bookingsData.reduce((total, current) => total + current.value, 0)} lượt</p>
              </div>
              <Button variant="outline">Xem chi tiết</Button>
            </CardFooter>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Kênh đặt vé</CardTitle>
                <CardDescription>
                  Phân bổ theo kênh đặt vé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium">Website</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">45%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-medium">App di động</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">35%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Quầy vé</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">15%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm font-medium">Đại lý</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">5%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: '5%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Thời điểm đặt vé</CardTitle>
                <CardDescription>
                  Phân bổ theo thời điểm trong ngày
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium">Sáng (5h-11h)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">40%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-medium">Trưa (11h-15h)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">20%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Chiều (15h-19h)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">30%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm font-medium">Tối (19h-5h)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">10%</span>
                      <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="routes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tuyến phổ biến nhất</CardTitle>
              <CardDescription>
                Xếp hạng các tuyến theo lượt đặt vé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center">1</span>
                    <span className="text-sm font-medium">Hải Dương - Hà Nội</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">3,240 lượt</span>
                    <div className="w-36 h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center">2</span>
                    <span className="text-sm font-medium">Hà Nội - Hải Dương</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">2,980 lượt</span>
                    <div className="w-36 h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center">3</span>
                    <span className="text-sm font-medium">Hải Dương - Thái Bình</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">1,850 lượt</span>
                    <div className="w-36 h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '57%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center">4</span>
                    <span className="text-sm font-medium">Hải Dương - Hải Phòng</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">1,560 lượt</span>
                    <div className="w-36 h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '48%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center">5</span>
                    <span className="text-sm font-medium">Hải Dương - Nam Định</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">980 lượt</span>
                    <div className="w-36 h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Xem tất cả tuyến</Button>
            </CardFooter>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Lượt đi cao nhất</CardTitle>
                <CardDescription>Theo ngày trong tuần</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-24">
                  <div className="text-4xl font-bold">Thứ 6</div>
                  <p className="text-sm text-muted-foreground mt-1">28% lượt đặt vé</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Giờ cao điểm</CardTitle>
                <CardDescription>Khung giờ đông nhất</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-24">
                  <div className="text-4xl font-bold">17:00</div>
                  <p className="text-sm text-muted-foreground mt-1">32% lượt đặt vé</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Đánh giá</CardTitle>
                <CardDescription>Xếp hạng trung bình</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-24">
                  <div className="text-4xl font-bold">4.8/5</div>
                  <p className="text-sm text-muted-foreground mt-1">từ 1,250 đánh giá</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 