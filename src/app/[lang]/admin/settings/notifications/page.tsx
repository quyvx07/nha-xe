'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  Mail, 
  Smartphone, 
  Vibrate, 
  Calendar, 
  MessageSquare, 
  Users,
  CircleDollarSign,
  AlertCircle,
  Truck,
  Clock,
  Trash,
  Filter
} from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function NotificationsPage() {
  // Email Notifications
  const [emailBookings, setEmailBookings] = useState(true);
  const [emailPayments, setEmailPayments] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [emailSecurity, setEmailSecurity] = useState(true);
  const [emailMarketing, setEmailMarketing] = useState(false);
  
  // Push Notifications
  const [pushBookings, setPushBookings] = useState(true);
  const [pushPayments, setPushPayments] = useState(true);
  const [pushUpdates, setPushUpdates] = useState(false);
  const [pushSecurity, setPushSecurity] = useState(true);
  const [pushReminders, setPushReminders] = useState(true);
  
  // SMS Notifications
  const [smsBookings, setSmsBookings] = useState(false);
  const [smsPayments, setSmsPayments] = useState(true);
  const [smsSecurity, setSmsSecurity] = useState(true);
  
  // General Notification Settings
  const [vibration, setVibration] = useState(true);
  const [sound, setSound] = useState(true);
  const [doNotDisturb, setDoNotDisturb] = useState(false);
  const [quietHoursStart, setQuietHoursStart] = useState('22:00');
  const [quietHoursEnd, setQuietHoursEnd] = useState('07:00');
  const [notificationFrequency, setNotificationFrequency] = useState('realtime');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Thông báo</h1>
        <p className="text-muted-foreground mt-1">
          Quản lý tùy chọn thông báo và nhắc nhở
        </p>
      </div>

      <Tabs defaultValue="email" className="w-full space-y-6">
        <TabsList className="grid w-full md:w-auto grid-cols-3 mb-4">
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> 
            <span className="hidden sm:inline">Email</span>
          </TabsTrigger>
          <TabsTrigger value="push" className="flex items-center gap-2">
            <Bell className="h-4 w-4" /> 
            <span className="hidden sm:inline">Thông báo đẩy</span>
          </TabsTrigger>
          <TabsTrigger value="sms" className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" /> 
            <span className="hidden sm:inline">SMS</span>
          </TabsTrigger>
        </TabsList>

        {/* Email Notifications */}
        <TabsContent value="email" className="space-y-6">
          <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
            <CardHeader className="pb-3">
              <h3 className="text-lg font-medium flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                Thông báo qua Email
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div className="grid gap-y-0">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Đặt vé & xác nhận</p>
                      <p className="text-sm text-muted-foreground">
                        Thông báo khi có đặt vé mới hoặc xác nhận đặt vé
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="email-bookings"
                    checked={emailBookings}
                    onCheckedChange={setEmailBookings}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <CircleDollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Thanh toán & hóa đơn</p>
                      <p className="text-sm text-muted-foreground">
                        Thông báo về thanh toán, hóa đơn và giao dịch tài chính
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="email-payments"
                    checked={emailPayments}
                    onCheckedChange={setEmailPayments}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Cập nhật hệ thống</p>
                      <p className="text-sm text-muted-foreground">
                        Thông báo về cập nhật tính năng và bảo trì hệ thống
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="email-updates"
                    checked={emailUpdates}
                    onCheckedChange={setEmailUpdates}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <AlertCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Bảo mật & đăng nhập</p>
                      <p className="text-sm text-muted-foreground">
                        Thông báo về đăng nhập mới và thay đổi bảo mật
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="email-security"
                    checked={emailSecurity}
                    onCheckedChange={setEmailSecurity}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Marketing & khuyến mãi</p>
                      <p className="text-sm text-muted-foreground">
                        Thông báo về khuyến mãi, sự kiện và ưu đãi mới
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="email-marketing"
                    checked={emailMarketing}
                    onCheckedChange={setEmailMarketing}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Push Notifications */}
        <TabsContent value="push" className="space-y-6">
          <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
            <CardHeader className="pb-3">
              <h3 className="text-lg font-medium flex items-center">
                <Bell className="mr-2 h-5 w-5 text-primary" />
                Thông báo đẩy trên thiết bị
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div className="grid gap-y-0">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Đặt vé & thay đổi lịch</p>
                      <p className="text-sm text-muted-foreground">
                        Thông báo về đặt vé mới, hủy vé hoặc thay đổi lịch
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="push-bookings"
                    checked={pushBookings}
                    onCheckedChange={setPushBookings}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <CircleDollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Thanh toán & giao dịch</p>
                      <p className="text-sm text-muted-foreground">
                        Thông báo về giao dịch thanh toán và hóa đơn
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="push-payments"
                    checked={pushPayments}
                    onCheckedChange={setPushPayments}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Cập nhật trạng thái</p>
                      <p className="text-sm text-muted-foreground">
                        Thông báo về thay đổi trạng thái chuyến xe
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="push-updates"
                    checked={pushUpdates}
                    onCheckedChange={setPushUpdates}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <AlertCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Cảnh báo bảo mật</p>
                      <p className="text-sm text-muted-foreground">
                        Thông báo về hoạt động đáng ngờ và đăng nhập mới
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="push-security"
                    checked={pushSecurity}
                    onCheckedChange={setPushSecurity}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Nhắc nhở</p>
                      <p className="text-sm text-muted-foreground">
                        Nhắc nhở trước khi khởi hành chuyến xe
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="push-reminders"
                    checked={pushReminders}
                    onCheckedChange={setPushReminders}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
            <CardHeader className="pb-3">
              <h3 className="text-lg font-medium flex items-center">
                <Smartphone className="mr-2 h-5 w-5 text-primary" />
                Cài đặt thiết bị
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div className="grid gap-y-0">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Vibrate className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Rung khi có thông báo</p>
                      <p className="text-sm text-muted-foreground">
                        Thiết bị sẽ rung khi nhận được thông báo
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="vibration"
                    checked={vibration}
                    onCheckedChange={setVibration}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Bell className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Âm thanh thông báo</p>
                      <p className="text-sm text-muted-foreground">
                        Phát âm thanh khi có thông báo mới
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="sound"
                    checked={sound}
                    onCheckedChange={setSound}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Chế độ không làm phiền</p>
                      <p className="text-sm text-muted-foreground">
                        Tắt thông báo trong khoảng thời gian xác định
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="do-not-disturb"
                    checked={doNotDisturb}
                    onCheckedChange={setDoNotDisturb}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>

                {doNotDisturb && (
                  <div className="py-3 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Thời gian yên tĩnh</p>
                        <p className="text-sm text-muted-foreground">
                          Đặt khoảng thời gian không nhận thông báo
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 ml-12">
                      <div className="space-y-2">
                        <p className="text-sm">Bắt đầu</p>
                        <Select 
                          value={quietHoursStart} 
                          onValueChange={setQuietHoursStart}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Bắt đầu" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }).map((_, i) => {
                              const hour = i.toString().padStart(2, '0');
                              return (
                                <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                                  {`${hour}:00`}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm">Kết thúc</p>
                        <Select 
                          value={quietHoursEnd} 
                          onValueChange={setQuietHoursEnd}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Kết thúc" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }).map((_, i) => {
                              const hour = i.toString().padStart(2, '0');
                              return (
                                <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                                  {`${hour}:00`}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Filter className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Tần suất thông báo</p>
                      <p className="text-sm text-muted-foreground">
                        Cách thức và tần suất nhận thông báo
                      </p>
                    </div>
                  </div>
                  <Select 
                    value={notificationFrequency} 
                    onValueChange={setNotificationFrequency}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Chọn tần suất" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Thời gian thực</SelectItem>
                      <SelectItem value="batch">Gộp theo lô</SelectItem>
                      <SelectItem value="daily">Tóm tắt hàng ngày</SelectItem>
                      <SelectItem value="weekly">Tóm tắt hàng tuần</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SMS Notifications */}
        <TabsContent value="sms" className="space-y-6">
          <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
            <CardHeader className="pb-3">
              <h3 className="text-lg font-medium flex items-center">
                <Smartphone className="mr-2 h-5 w-5 text-primary" />
                Thông báo qua SMS
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div className="grid gap-y-0">
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Xác nhận đặt vé</p>
                      <p className="text-sm text-muted-foreground">
                        Tin nhắn xác nhận khi đặt vé thành công
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="sms-bookings"
                    checked={smsBookings}
                    onCheckedChange={setSmsBookings}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <CircleDollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Xác nhận thanh toán</p>
                      <p className="text-sm text-muted-foreground">
                        Thông báo khi thanh toán được xác nhận
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="sms-payments"
                    checked={smsPayments}
                    onCheckedChange={setSmsPayments}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <AlertCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Mã xác thực</p>
                      <p className="text-sm text-muted-foreground">
                        Mã xác thực đăng nhập và các hoạt động bảo mật
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="sms-security"
                    checked={smsSecurity}
                    onCheckedChange={setSmsSecurity}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-500">
                  Lưu ý về tin nhắn SMS
                </h4>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">
                  Tin nhắn SMS có thể phát sinh phí dịch vụ từ nhà mạng. Chúng tôi khuyến nghị sử dụng 
                  thông báo qua email hoặc thông báo đẩy để tiết kiệm chi phí.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between items-center mt-6">
        <Button variant="outline" className="gap-2">
          <Trash className="h-4 w-4" />
          Xóa toàn bộ thông báo
        </Button>
        <div className="flex gap-2">
          <Button variant="outline">Đặt lại mặc định</Button>
          <Button>Lưu thay đổi</Button>
        </div>
      </div>
    </div>
  );
} 