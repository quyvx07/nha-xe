import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FiEdit, FiTrash2, FiSearch, FiUserPlus, FiFilter, FiFileText } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  bookings: number;
  status: string;
  lastActive: string;
}

// Mock data
const users: User[] = [
  {
    id: "1",
    name: "Nguyễn Thị A",
    email: "nguyena@example.com",
    phone: "0987654321",
    role: "CUSTOMER",
    bookings: 15,
    status: "active",
    lastActive: "2023-06-19T15:30:00",
  },
  {
    id: "2",
    name: "Trần Văn B",
    email: "tranb@example.com",
    phone: "0123456789",
    role: "DRIVER",
    bookings: 0,
    status: "active",
    lastActive: "2023-06-19T10:15:00",
  },
  {
    id: "3",
    name: "Lê Văn C",
    email: "lec@example.com",
    phone: "0369852147",
    role: "CUSTOMER",
    bookings: 8,
    status: "active",
    lastActive: "2023-06-18T16:45:00",
  },
  {
    id: "4",
    name: "Phạm Thị D",
    email: "phamd@example.com",
    phone: "0321654987",
    role: "CUSTOMER",
    bookings: 22,
    status: "inactive",
    lastActive: "2023-06-10T09:20:00",
  },
  {
    id: "5",
    name: "Hoàng Văn E",
    email: "hoange@example.com",
    phone: "0912345678",
    role: "ADMIN",
    bookings: 0,
    status: "active",
    lastActive: "2023-06-19T14:00:00",
  },
];

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

// Helper function to format time
function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Helper function to get role text in Vietnamese
function getRoleText(role: string): string {
  switch (role) {
    case "ADMIN":
      return "Quản trị viên";
    case "DRIVER":
      return "Tài xế";
    case "CUSTOMER":
      return "Khách hàng";
    default:
      return role;
  }
}

// Helper function to get role badge variant
function getRoleBadgeVariant(role: string): "default" | "destructive" | "outline" | "secondary" {
  switch (role) {
    case "ADMIN":
      return "default";
    case "DRIVER":
      return "secondary";
    case "CUSTOMER":
      return "outline";
    default:
      return "outline";
  }
}

// Helper function to get user initials for avatar
function getUserInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}

export default function UsersPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Quản lý người dùng</h3>
        <Link href="/admin/users/new">
          <Button className="w-full sm:w-auto">
            <FiUserPlus className="mr-2 h-4 w-4" /> <span>Thêm người dùng</span>
          </Button>
        </Link>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle>Danh sách người dùng</CardTitle>
          <CardDescription className="hidden sm:block">
            Quản lý thông tin người dùng, bao gồm khách hàng, tài xế và quản trị viên
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 sm:p-6 pt-0">
          <div className="px-4 sm:px-0 mb-4 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div className="relative w-full sm:max-w-sm">
              <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm người dùng..."
                className="pl-8 w-full"
              />
            </div>
            <div className="flex w-full sm:w-auto gap-2 justify-end">
              <Button variant="outline" size="sm" className="h-10">
                <FiFilter className="h-4 w-4 mr-2 sm:mr-0 md:mr-2" />
                <span className="sm:hidden md:inline">Lọc theo vai trò</span>
              </Button>
              <Button variant="outline" size="sm" className="h-10">
                <FiFileText className="h-4 w-4 mr-2 sm:mr-0 md:mr-2" />
                <span className="sm:hidden md:inline">Xuất Excel</span>
              </Button>
            </div>
          </div>
          
          {/* Desktop table */}
          <div className="hidden md:block rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tên người dùng</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Số điện thoại</TableHead>
                  <TableHead>Vai trò</TableHead>
                  <TableHead>Số đặt vé</TableHead>
                  <TableHead>Hoạt động gần nhất</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={`/avatars/avatar-${user.id}.png`} alt={user.name} />
                          <AvatarFallback>{getUserInitials(user.name)}</AvatarFallback>
                        </Avatar>
                        <div className="font-medium">{user.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      <Badge variant={getRoleBadgeVariant(user.role)}>
                        {getRoleText(user.role)}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.bookings}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {formatDate(user.lastActive)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {formatTime(user.lastActive)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={user.status === "active" ? "default" : "destructive"}
                      >
                        {user.status === "active" ? "Đang hoạt động" : "Không hoạt động"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="icon">
                          <FiEdit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <FiTrash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Mobile card layout */}
          <div className="block md:hidden">
            {users.map((user) => (
              <div key={user.id} className="border-b p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`/avatars/avatar-${user.id}.png`} alt={user.name} />
                      <AvatarFallback>{getUserInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{user.name}</h4>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Badge variant={getRoleBadgeVariant(user.role)}>
                    {getRoleText(user.role)}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Số điện thoại:</span>
                  </div>
                  <div>{user.phone}</div>
                  
                  <div>
                    <span className="text-muted-foreground">Số đặt vé:</span>
                  </div>
                  <div>{user.bookings}</div>
                  
                  <div>
                    <span className="text-muted-foreground">Hoạt động gần nhất:</span>
                  </div>
                  <div>{formatDate(user.lastActive)} {formatTime(user.lastActive)}</div>
                  
                  <div>
                    <span className="text-muted-foreground">Trạng thái:</span>
                  </div>
                  <div>
                    <Badge
                      variant={user.status === "active" ? "default" : "destructive"}
                      className="ml-0"
                    >
                      {user.status === "active" ? "Đang hoạt động" : "Không hoạt động"}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2 pt-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <FiEdit className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <FiTrash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="px-4 sm:px-0 flex items-center justify-between sm:justify-end space-x-2 py-4">
            <div className="text-sm text-muted-foreground sm:mr-4">
              1-{users.length} của {users.length} người dùng
            </div>
            <Button variant="outline" size="sm" disabled>
              Trước
            </Button>
            <Button variant="outline" size="sm" disabled>
              Tiếp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}