'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, Globe, MapPin, Camera, Briefcase, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: 'Nguyễn',
    lastName: 'Văn A',
    email: 'example@gmail.com',
    phone: '0912345678',
    language: 'vi',
    address: 'Số 123, Đường ABC, Phường XYZ, Quận/Huyện, Thành phố',
    bio: 'Quản trị viên hệ thống với hơn 5 năm kinh nghiệm',
    position: 'Quản trị viên',
    birthday: '1990-01-01',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý lưu thông tin
    console.log('Đã lưu thông tin:', formData);
    // Hiển thị thông báo thành công
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Thông tin cá nhân</h1>
        <p className="text-muted-foreground mt-1">
          Cập nhật thông tin cá nhân và tài khoản của bạn
        </p>
      </div>

      <form onSubmit={handleSave}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Avatar Card */}
          <Card className="shadow-sm border border-gray-100 dark:border-gray-800 lg:col-span-1">
            <CardHeader className="pb-3">
              <h3 className="text-lg font-medium flex items-center">
                <User className="mr-2 h-5 w-5 text-primary" />
                Ảnh đại diện
              </h3>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col items-center">
              <div className="relative mb-4">
                <Avatar className="h-24 w-24 border-4 border-primary/10">
                  <AvatarImage src="/avatars/admin.png" alt="Ảnh hồ sơ" />
                  <AvatarFallback className="text-lg">VA</AvatarFallback>
                </Avatar>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-primary text-white hover:bg-primary/90 shadow-md"
                >
                  <Camera className="h-4 w-4" />
                  <span className="sr-only">Thay đổi ảnh đại diện</span>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Tải lên ảnh JPG, PNG hoặc GIF với kích thước tối đa 1MB
              </p>
              <div className="flex gap-2 mt-2">
                <Button type="button" variant="outline" size="sm">Xóa ảnh</Button>
                <Button type="button" size="sm">Tải ảnh mới</Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Information */}
          <Card className="shadow-sm border border-gray-100 dark:border-gray-800 lg:col-span-2">
            <CardHeader className="pb-3">
              <h3 className="text-lg font-medium flex items-center">
                <User className="mr-2 h-5 w-5 text-primary" />
                Thông tin cơ bản
              </h3>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Họ</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Nhập họ"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Tên</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Nhập tên"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>Email</span>
                  </div>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>Số điện thoại</span>
                  </div>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="0912345678"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthday">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>Ngày sinh</span>
                  </div>
                </Label>
                <Input
                  id="birthday"
                  name="birthday"
                  type="date"
                  value={formData.birthday}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>Ngôn ngữ</span>
                  </div>
                </Label>
                <Select 
                  value={formData.language} 
                  onValueChange={(value) => handleSelectChange('language', value)}
                >
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Chọn ngôn ngữ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vi">Tiếng Việt</SelectItem>
                    <SelectItem value="en">Tiếng Anh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="shadow-sm border border-gray-100 dark:border-gray-800 lg:col-span-3">
            <CardHeader className="pb-3">
              <h3 className="text-lg font-medium flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                Thông tin bổ sung
              </h3>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="position">
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>Chức vụ</span>
                  </div>
                </Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Chức vụ của bạn"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>Địa chỉ</span>
                  </div>
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Nhập địa chỉ của bạn"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Giới thiệu</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Mô tả ngắn về bản thân"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-3 flex justify-end gap-2">
            <Button type="button" variant="outline">Hủy</Button>
            <Button type="submit">Lưu thay đổi</Button>
          </div>
        </div>
      </form>
    </div>
  );
} 