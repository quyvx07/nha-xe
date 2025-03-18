"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Camera,
  FileText,
  Clock,
  Truck,
  Bus,
  AlertCircle,
  Info
} from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

export default function CompanyPage() {
  // Company Information
  const [companyName, setCompanyName] = useState('Công ty TNHH Vận tải ABC');
  const [businessType, setBusinessType] = useState('transport');
  const [taxNumber, setTaxNumber] = useState('0123456789');
  const [foundedYear, setFoundedYear] = useState('2010');
  const [employeeCount, setEmployeeCount] = useState('50-100');
  const [website, setWebsite] = useState('www.abctransport.com');
  const [description, setDescription] = useState('Chuyên cung cấp dịch vụ vận tải hành khách chất lượng cao');
  
  // Contact Information
  const [email, setEmail] = useState('contact@abctransport.com');
  const [phone, setPhone] = useState('1900 1234');
  const [hotline, setHotline] = useState('0912 345 678');
  const [address, setAddress] = useState('123 Đường ABC, Phường XYZ, Quận/Huyện, Thành phố');
  
  // Business Hours
  const [weekdayStart, setWeekdayStart] = useState('07:00');
  const [weekdayEnd, setWeekdayEnd] = useState('22:00');
  const [weekendStart, setWeekendStart] = useState('08:00');
  const [weekendEnd, setWeekendEnd] = useState('21:00');
  
  // Fleet Information
  const [fleetSize, setFleetSize] = useState('20-50');
  const [serviceAreas, setServiceAreas] = useState('national');
  const [routeTypes, setRouteTypes] = useState('mixed');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Thông tin công ty</h1>
        <p className="text-muted-foreground mt-1">
          Quản lý thông tin và hồ sơ doanh nghiệp
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Company Profile */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              <Building className="mr-2 h-5 w-5 text-primary" />
              Hồ sơ công ty
            </h3>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <Avatar className="h-24 w-24 border-4 border-primary/10">
                  <AvatarImage src="/company-logo.png" alt="Logo công ty" />
                  <AvatarFallback>ABC</AvatarFallback>
                </Avatar>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-primary text-white hover:bg-primary/90 shadow-md"
                >
                  <Camera className="h-4 w-4" />
                  <span className="sr-only">Thay đổi logo</span>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Tải lên logo công ty (PNG, JPG)
              </p>
              <div className="flex gap-2">
                <Button type="button" variant="outline" size="sm">Xóa logo</Button>
                <Button type="button" size="sm">Tải logo mới</Button>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Tên công ty</Label>
                  <Input
                    id="company-name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Nhập tên công ty"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-type">Loại hình kinh doanh</Label>
                  <Select value={businessType} onValueChange={setBusinessType}>
                    <SelectTrigger id="business-type">
                      <SelectValue placeholder="Chọn loại hình" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="transport">Vận tải hành khách</SelectItem>
                      <SelectItem value="logistics">Logistics</SelectItem>
                      <SelectItem value="mixed">Đa dịch vụ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="tax-number">Mã số thuế</Label>
                  <Input
                    id="tax-number"
                    value={taxNumber}
                    onChange={(e) => setTaxNumber(e.target.value)}
                    placeholder="Nhập mã số thuế"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="founded-year">Năm thành lập</Label>
                  <Input
                    id="founded-year"
                    value={foundedYear}
                    onChange={(e) => setFoundedYear(e.target.value)}
                    placeholder="Nhập năm thành lập"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="employee-count">Số lượng nhân viên</Label>
                  <Select value={employeeCount} onValueChange={setEmployeeCount}>
                    <SelectTrigger id="employee-count">
                      <SelectValue placeholder="Chọn quy mô" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 nhân viên</SelectItem>
                      <SelectItem value="11-50">11-50 nhân viên</SelectItem>
                      <SelectItem value="50-100">50-100 nhân viên</SelectItem>
                      <SelectItem value="100-500">100-500 nhân viên</SelectItem>
                      <SelectItem value="500+">Trên 500 nhân viên</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Nhập địa chỉ website"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Giới thiệu công ty</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Mô tả ngắn về công ty"
                  rows={4}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              <Phone className="mr-2 h-5 w-5 text-primary" />
              Thông tin liên hệ
            </h3>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>Email liên hệ</span>
                </div>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@company.com"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>Số điện thoại</span>
                  </div>
                </Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="1900 xxxx"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotline">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>Hotline</span>
                  </div>
                </Label>
                <Input
                  id="hotline"
                  value={hotline}
                  onChange={(e) => setHotline(e.target.value)}
                  placeholder="0912 xxx xxx"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>Địa chỉ</span>
                </div>
              </Label>
              <Textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Nhập địa chỉ công ty"
                rows={2}
              />
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-sm font-medium flex items-center">
                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                Giờ làm việc
              </h4>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Thứ 2 - Thứ 6</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weekday-start">Giờ mở cửa</Label>
                      <Select value={weekdayStart} onValueChange={setWeekdayStart}>
                        <SelectTrigger id="weekday-start">
                          <SelectValue placeholder="Chọn giờ" />
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
                      <Label htmlFor="weekday-end">Giờ đóng cửa</Label>
                      <Select value={weekdayEnd} onValueChange={setWeekdayEnd}>
                        <SelectTrigger id="weekday-end">
                          <SelectValue placeholder="Chọn giờ" />
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

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Thứ 7 - Chủ nhật</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weekend-start">Giờ mở cửa</Label>
                      <Select value={weekendStart} onValueChange={setWeekendStart}>
                        <SelectTrigger id="weekend-start">
                          <SelectValue placeholder="Chọn giờ" />
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
                      <Label htmlFor="weekend-end">Giờ đóng cửa</Label>
                      <Select value={weekendEnd} onValueChange={setWeekendEnd}>
                        <SelectTrigger id="weekend-end">
                          <SelectValue placeholder="Chọn giờ" />
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
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Information */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800 lg:col-span-2">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              <FileText className="mr-2 h-5 w-5 text-primary" />
              Thông tin hoạt động
            </h3>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fleet-size">
                    <div className="flex items-center">
                      <Bus className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>Quy mô đội xe</span>
                    </div>
                  </Label>
                  <Select value={fleetSize} onValueChange={setFleetSize}>
                    <SelectTrigger id="fleet-size">
                      <SelectValue placeholder="Chọn quy mô" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 xe</SelectItem>
                      <SelectItem value="11-20">11-20 xe</SelectItem>
                      <SelectItem value="20-50">20-50 xe</SelectItem>
                      <SelectItem value="50-100">50-100 xe</SelectItem>
                      <SelectItem value="100+">Trên 100 xe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service-areas">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>Phạm vi hoạt động</span>
                    </div>
                  </Label>
                  <Select value={serviceAreas} onValueChange={setServiceAreas}>
                    <SelectTrigger id="service-areas">
                      <SelectValue placeholder="Chọn phạm vi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Nội tỉnh/thành</SelectItem>
                      <SelectItem value="regional">Liên tỉnh khu vực</SelectItem>
                      <SelectItem value="national">Toàn quốc</SelectItem>
                      <SelectItem value="international">Quốc tế</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="route-types">
                    <div className="flex items-center">
                      <Truck className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>Loại tuyến</span>
                    </div>
                  </Label>
                  <Select value={routeTypes} onValueChange={setRouteTypes}>
                    <SelectTrigger id="route-types">
                      <SelectValue placeholder="Chọn loại tuyến" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fixed">Cố định</SelectItem>
                      <SelectItem value="tourist">Du lịch</SelectItem>
                      <SelectItem value="mixed">Hỗn hợp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-500">
                        Lưu ý về thông tin doanh nghiệp
                      </h4>
                      <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">
                        Vui lòng cung cấp thông tin chính xác để đảm bảo tính pháp lý và 
                        thuận tiện trong quá trình vận hành. Thông tin này sẽ được sử dụng 
                        trong các văn bản và giao dịch chính thức.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-800 dark:text-blue-500">
                        Xác thực thông tin
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                        Để hoàn tất quá trình cập nhật thông tin, vui lòng tải lên các 
                        giấy tờ pháp lý như: Giấy phép kinh doanh, giấy phép vận tải, 
                        và các chứng nhận liên quan.
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Tải lên giấy tờ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button variant="outline">Đặt lại mặc định</Button>
        <Button>Lưu thay đổi</Button>
      </div>
    </div>
  );
} 