'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Moon, 
  Sun, 
  Palette,
  MonitorSmartphone,
  Monitor,
  Smartphone,
  EyeOff,
  Clock,
  RefreshCw
} from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

export default function AppearancePage() {
  // States
  const [darkMode, setDarkMode] = useState(false);
  const [autoTheme, setAutoTheme] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [reducedData, setReducedData] = useState(false);
  const [deviceType, setDeviceType] = useState('system');
  const [fontSize, setFontSize] = useState('medium');
  const [colorScheme, setColorScheme] = useState('default');
  const [sidebarSize, setSidebarSize] = useState('default');
  const [timeFormat, setTimeFormat] = useState('12');
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState('5');

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Đây là nơi bạn có thể thêm logic để lưu cài đặt và áp dụng chế độ tối
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  // Color scheme options
  const colorSchemes = [
    { value: 'default', label: 'Mặc định', color: 'bg-primary' },
    { value: 'blue', label: 'Xanh dương', color: 'bg-blue-600' },
    { value: 'green', label: 'Xanh lá', color: 'bg-green-600' },
    { value: 'purple', label: 'Tím', color: 'bg-purple-600' },
    { value: 'orange', label: 'Cam', color: 'bg-orange-600' },
    { value: 'red', label: 'Đỏ', color: 'bg-red-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Giao diện</h1>
        <p className="text-muted-foreground mt-1">
          Tùy chỉnh giao diện và hiển thị hệ thống
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Theme Settings */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              {darkMode ? (
                <Moon className="mr-2 h-5 w-5 text-primary" />
              ) : (
                <Sun className="mr-2 h-5 w-5 text-primary" />
              )}
              Chế độ chủ đề
            </h3>
          </CardHeader>
          <CardContent className="pt-0 space-y-6">
            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  {darkMode ? (
                    <Moon className="h-5 w-5 text-primary" />
                  ) : (
                    <Sun className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">Chế độ tối</p>
                  <p className="text-sm text-muted-foreground">
                    {darkMode ? 'Đang bật' : 'Đang tắt'}
                  </p>
                </div>
              </div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={handleDarkModeToggle}
                className="data-[state=checked]:bg-primary"
              />
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tự động thay đổi theo thời gian</p>
                  <p className="text-sm text-muted-foreground">
                    Sáng vào ban ngày, tối vào ban đêm
                  </p>
                </div>
              </div>
              <Switch
                id="auto-theme"
                checked={autoTheme}
                onCheckedChange={setAutoTheme}
                className="data-[state=checked]:bg-primary"
              />
            </div>

            <div className="py-3">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  <MonitorSmartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Chế độ thiết bị</p>
                  <p className="text-sm text-muted-foreground">
                    Chọn kiểu hiển thị theo thiết bị
                  </p>
                </div>
              </div>
              <RadioGroup 
                defaultValue={deviceType} 
                onValueChange={setDeviceType}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="system" />
                  <Label htmlFor="system" className="flex items-center cursor-pointer">
                    <MonitorSmartphone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Theo thiết bị</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="desktop" id="desktop" />
                  <Label htmlFor="desktop" className="flex items-center cursor-pointer">
                    <Monitor className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Phiên bản máy tính</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mobile" id="mobile" />
                  <Label htmlFor="mobile" className="flex items-center cursor-pointer">
                    <Smartphone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Phiên bản di động</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Settings */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              <EyeOff className="mr-2 h-5 w-5 text-primary" />
              Trợ năng
            </h3>
          </CardHeader>
          <CardContent className="pt-0 space-y-6">
            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  <EyeOff className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Giảm chuyển động</p>
                  <p className="text-sm text-muted-foreground">
                    Giảm hiệu ứng chuyển động và animation
                  </p>
                </div>
              </div>
              <Switch
                id="reduced-motion"
                checked={reducedMotion}
                onCheckedChange={setReducedMotion}
                className="data-[state=checked]:bg-primary"
              />
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tiết kiệm dữ liệu</p>
                  <p className="text-sm text-muted-foreground">
                    Giảm tải hình ảnh chất lượng cao
                  </p>
                </div>
              </div>
              <Switch
                id="reduced-data"
                checked={reducedData}
                onCheckedChange={setReducedData}
                className="data-[state=checked]:bg-primary"
              />
            </div>

            <div className="py-3">
              <div className="flex items-center mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  <Sun className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Kích thước font chữ</p>
                  <p className="text-sm text-muted-foreground">
                    Điều chỉnh kích thước văn bản
                  </p>
                </div>
              </div>
              <Select value={fontSize} onValueChange={setFontSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn kích thước" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Nhỏ</SelectItem>
                  <SelectItem value="medium">Vừa</SelectItem>
                  <SelectItem value="large">Lớn</SelectItem>
                  <SelectItem value="xlarge">Rất lớn</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Color Scheme */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              <Palette className="mr-2 h-5 w-5 text-primary" />
              Bảng màu
            </h3>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="py-3 space-y-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Màu chủ đạo</p>
                  <p className="text-sm text-muted-foreground">
                    Chọn màu sắc chính cho hệ thống
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mt-3">
                {colorSchemes.map((scheme) => (
                  <div key={scheme.value} className="flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setColorScheme(scheme.value)}
                      className={`
                        w-12 h-12 rounded-full mb-1 transition-all
                        ${scheme.color}
                        ${colorScheme === scheme.value ? 'ring-2 ring-offset-2 ring-primary' : ''}
                      `}
                      aria-label={scheme.label}
                    />
                    <span className="text-xs">{scheme.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Display Settings */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              <Monitor className="mr-2 h-5 w-5 text-primary" />
              Tùy chọn hiển thị
            </h3>
          </CardHeader>
          <CardContent className="pt-0 space-y-6">
            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Định dạng thời gian</p>
                  <p className="text-sm text-muted-foreground">
                    {timeFormat === '12' ? '12 giờ (AM/PM)' : '24 giờ'}
                  </p>
                </div>
              </div>
              <Select value={timeFormat} onValueChange={setTimeFormat}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Định dạng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12 giờ (AM/PM)</SelectItem>
                  <SelectItem value="24">24 giờ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Kích thước thanh bên</p>
                  <p className="text-sm text-muted-foreground">
                    Điều chỉnh độ rộng của thanh điều hướng
                  </p>
                </div>
              </div>
              <Select value={sidebarSize} onValueChange={setSidebarSize}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Kích thước" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compact">Thu gọn</SelectItem>
                  <SelectItem value="default">Mặc định</SelectItem>
                  <SelectItem value="wide">Rộng</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  <RefreshCw className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tự động làm mới dữ liệu</p>
                  <p className="text-sm text-muted-foreground">
                    Tự động cập nhật dữ liệu theo chu kỳ
                  </p>
                </div>
              </div>
              <Switch
                id="auto-refresh"
                checked={autoRefresh}
                onCheckedChange={setAutoRefresh}
                className="data-[state=checked]:bg-primary"
              />
            </div>

            {autoRefresh && (
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Chu kỳ làm mới (phút)</p>
                    <p className="text-sm text-muted-foreground">
                      Thời gian giữa các lần làm mới
                    </p>
                  </div>
                </div>
                <Select value={refreshInterval} onValueChange={setRefreshInterval}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Chu kỳ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 phút</SelectItem>
                    <SelectItem value="5">5 phút</SelectItem>
                    <SelectItem value="15">15 phút</SelectItem>
                    <SelectItem value="30">30 phút</SelectItem>
                    <SelectItem value="60">60 phút</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
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