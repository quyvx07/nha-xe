"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Lock,
  KeyRound,
  Smartphone,
  AlertCircle,
  LogOut,
  MailCheck,
  Eye,
  EyeOff,
  Clock,
  Fingerprint,
  ShieldAlert,
  CheckCircle2,
  Info,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@radix-ui/react-progress";

export default function SecurityPage() {
  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 2FA and security settings
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [twoFactorMethod, setTwoFactorMethod] = useState("app");
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [passwordExpiry, setPasswordExpiry] = useState("90");
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState("30");
  const [recoveryEmail, setRecoveryEmail] = useState("backup@gmail.com");

  // Security log data (mock)
  const securityLogs = [
    {
      date: "2023-06-15 10:30",
      activity: "Đăng nhập thành công",
      location: "Hà Nội, Việt Nam",
      device: "Chrome / Windows",
    },
    {
      date: "2023-06-14 18:45",
      activity: "Đổi mật khẩu",
      location: "Hà Nội, Việt Nam",
      device: "Safari / iOS",
    },
    {
      date: "2023-06-10 09:15",
      activity: "Thiết lập xác thực hai lớp",
      location: "Hà Nội, Việt Nam",
      device: "Chrome / Windows",
    },
    {
      date: "2023-06-05 14:20",
      activity: "Đăng nhập thành công",
      location: "Hồ Chí Minh, Việt Nam",
      device: "Chrome / Android",
    },
  ];

  // Calculate password strength
  const calculatePasswordStrength = (password: string) => {
    if (!password) return 0;

    let strength = 0;

    // Length check
    if (password.length >= 8) strength += 25;

    // Complexity checks
    if (/[A-Z]/.test(password)) strength += 25; // Has uppercase
    if (/[0-9]/.test(password)) strength += 25; // Has number
    if (/[^A-Za-z0-9]/.test(password)) strength += 25; // Has special char

    return strength;
  };

  const passwordStrength = calculatePasswordStrength(newPassword);

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 25) return "Yếu";
    if (passwordStrength <= 50) return "Trung bình";
    if (passwordStrength <= 75) return "Khá mạnh";
    return "Mạnh";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return "bg-red-500";
    if (passwordStrength <= 50) return "bg-yellow-500";
    if (passwordStrength <= 75) return "bg-blue-500";
    return "bg-green-500";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Bảo mật
        </h1>
        <p className="text-muted-foreground mt-1">
          Quản lý cài đặt bảo mật và quyền riêng tư
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Change Password Section */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              <Lock className="mr-2 h-5 w-5 text-primary" />
              Đổi mật khẩu
            </h3>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password" className="flex items-center">
                  <KeyRound className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>Mật khẩu hiện tại</span>
                </Label>
                <div className="relative">
                  <Input
                    id="current-password"
                    type={showCurrentPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Nhập mật khẩu hiện tại"
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="sr-only">
                      {showCurrentPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                    </span>
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="new-password" className="flex items-center">
                  <Lock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>Mật khẩu mới</span>
                </Label>
                <div className="relative">
                  <Input
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Nhập mật khẩu mới"
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="sr-only">
                      {showNewPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                    </span>
                  </Button>
                </div>

                {newPassword && (
                  <div className="space-y-1 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs">
                        Độ mạnh mật khẩu: {getPasswordStrengthText()}
                      </span>
                      <span className="text-xs">{passwordStrength}%</span>
                    </div>
                    <Progress
                      value={passwordStrength}
                      className={`h-1 ${getPasswordStrengthColor()}`}
                    />
                    <ul className="text-xs space-y-1 mt-2 text-muted-foreground">
                      <li className="flex items-center">
                        {newPassword.length >= 8 ? (
                          <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                        ) : (
                          <Info className="h-3 w-3 mr-1 text-gray-400" />
                        )}
                        Ít nhất 8 ký tự
                      </li>
                      <li className="flex items-center">
                        {/[A-Z]/.test(newPassword) ? (
                          <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                        ) : (
                          <Info className="h-3 w-3 mr-1 text-gray-400" />
                        )}
                        Ít nhất 1 chữ hoa
                      </li>
                      <li className="flex items-center">
                        {/[0-9]/.test(newPassword) ? (
                          <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                        ) : (
                          <Info className="h-3 w-3 mr-1 text-gray-400" />
                        )}
                        Ít nhất 1 chữ số
                      </li>
                      <li className="flex items-center">
                        {/[^A-Za-z0-9]/.test(newPassword) ? (
                          <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                        ) : (
                          <Info className="h-3 w-3 mr-1 text-gray-400" />
                        )}
                        Ít nhất 1 ký tự đặc biệt
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="flex items-center">
                  <Lock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>Xác nhận mật khẩu mới</span>
                </Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Nhập lại mật khẩu mới"
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="sr-only">
                      {showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                    </span>
                  </Button>
                </div>

                {confirmPassword && newPassword !== confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">
                    Mật khẩu xác nhận không khớp
                  </p>
                )}
              </div>
            </div>

            <div className="pt-2">
              <Button className="w-full">Cập nhật mật khẩu</Button>
            </div>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              <Shield className="mr-2 h-5 w-5 text-primary" />
              Xác thực hai lớp (2FA)
            </h3>
          </CardHeader>
          <CardContent className="pt-0 space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Xác thực hai lớp</p>
                  <p className="text-sm text-muted-foreground">
                    Bảo vệ tài khoản với lớp xác thực thứ hai
                  </p>
                </div>
              </div>
              <Switch
                id="2fa"
                checked={twoFactorEnabled}
                onCheckedChange={setTwoFactorEnabled}
                className="data-[state=checked]:bg-primary"
              />
            </div>

            {twoFactorEnabled && (
              <>
                <div className="py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Phương thức xác thực
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Chọn cách thức nhận mã xác thực
                      </p>
                    </div>
                  </div>

                  <div className="ml-12">
                    <Select
                      value={twoFactorMethod}
                      onValueChange={setTwoFactorMethod}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn phương thức" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="app">
                          Ứng dụng xác thực (Google Authenticator)
                        </SelectItem>
                        <SelectItem value="sms">Tin nhắn SMS</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                      <MailCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email khôi phục</p>
                      <p className="text-sm text-muted-foreground">
                        Email dự phòng để khôi phục tài khoản
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mt-3 ml-12 gap-2">
                    <Input
                      value={recoveryEmail}
                      onChange={(e) => setRecoveryEmail(e.target.value)}
                      placeholder="Email khôi phục"
                      className="max-w-xs"
                    />
                    <Button size="sm" variant="outline">
                      Cập nhật
                    </Button>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full mt-2">
                      Thiết lập lại 2FA
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Thiết lập lại xác thực hai lớp</DialogTitle>
                      <DialogDescription>
                        Quá trình này sẽ vô hiệu hóa 2FA hiện tại và yêu cầu bạn
                        thiết lập lại. Bạn có chắc chắn muốn tiếp tục?
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline">Hủy</Button>
                      <Button variant="destructive">Tiếp tục</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </>
            )}
          </CardContent>
        </Card>

        {/* Additional Security Settings */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800 lg:col-span-2">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              <ShieldAlert className="mr-2 h-5 w-5 text-primary" />
              Cài đặt bảo mật bổ sung
            </h3>
          </CardHeader>
          <CardContent className="pt-0 space-y-0">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="flex items-center justify-between py-3 border-b lg:border-r border-gray-100 dark:border-gray-800 pr-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Hết hạn mật khẩu</p>
                    <p className="text-sm text-muted-foreground">
                      Yêu cầu thay đổi mật khẩu định kỳ
                    </p>
                  </div>
                </div>
                <Select
                  value={passwordExpiry}
                  onValueChange={setPasswordExpiry}
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Thời gian" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Không bao giờ</SelectItem>
                    <SelectItem value="30">30 ngày</SelectItem>
                    <SelectItem value="60">60 ngày</SelectItem>
                    <SelectItem value="90">90 ngày</SelectItem>
                    <SelectItem value="180">180 ngày</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800 pl-4 lg:pl-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                    <LogOut className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Thời gian chờ phiên</p>
                    <p className="text-sm text-muted-foreground">
                      Tự động đăng xuất sau khoảng thời gian không hoạt động
                    </p>
                  </div>
                </div>
                <Select
                  value={sessionTimeout}
                  onValueChange={setSessionTimeout}
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Thời gian" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Không bao giờ</SelectItem>
                    <SelectItem value="15">15 phút</SelectItem>
                    <SelectItem value="30">30 phút</SelectItem>
                    <SelectItem value="60">1 giờ</SelectItem>
                    <SelectItem value="120">2 giờ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between py-3 border-b lg:border-r border-gray-100 dark:border-gray-800 pr-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Cảnh báo đăng nhập</p>
                    <p className="text-sm text-muted-foreground">
                      Thông báo khi có đăng nhập từ thiết bị lạ
                    </p>
                  </div>
                </div>
                <Switch
                  id="login-alerts"
                  checked={loginAlerts}
                  onCheckedChange={setLoginAlerts}
                  className="data-[state=checked]:bg-primary"
                />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800 pl-4 lg:pl-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 mr-3">
                    <Fingerprint className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Đăng nhập sinh trắc học
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sử dụng vân tay hoặc khuôn mặt để đăng nhập
                    </p>
                  </div>
                </div>
                <Switch
                  id="biometric"
                  checked={biometricEnabled}
                  onCheckedChange={setBiometricEnabled}
                  className="data-[state=checked]:bg-primary"
                />
              </div>
            </div>

            <div className="py-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <LogOut className="h-4 w-4 mr-2" />
                    Đăng xuất khỏi tất cả các thiết bị
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Đăng xuất từ tất cả thiết bị</DialogTitle>
                    <DialogDescription>
                      Hành động này sẽ kết thúc tất cả các phiên đăng nhập trên
                      tất cả các thiết bị. Bạn sẽ cần đăng nhập lại trên mọi
                      thiết bị. Tiếp tục?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Hủy</Button>
                    <Button variant="destructive">Đăng xuất tất cả</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Security Log */}
        <Card className="shadow-sm border border-gray-100 dark:border-gray-800 lg:col-span-2">
          <CardHeader className="pb-3">
            <h3 className="text-lg font-medium flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              Nhật ký bảo mật
            </h3>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="text-left font-medium py-2 px-4">
                      Thời gian
                    </th>
                    <th className="text-left font-medium py-2 px-4">
                      Hoạt động
                    </th>
                    <th className="text-left font-medium py-2 px-4">Vị trí</th>
                    <th className="text-left font-medium py-2 px-4">
                      Thiết bị
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {securityLogs.map((log, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <td className="py-3 px-4">{log.date}</td>
                      <td className="py-3 px-4">{log.activity}</td>
                      <td className="py-3 px-4">{log.location}</td>
                      <td className="py-3 px-4">{log.device}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-4">
              <Button variant="outline" size="sm">
                Xem tất cả
              </Button>
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
