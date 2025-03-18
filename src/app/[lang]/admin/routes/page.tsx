import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FiEdit, FiTrash2, FiPlus, FiSearch, FiEye } from "react-icons/fi";

interface Route {
  id: string;
  name: string;
  startPoint: string;
  endPoint: string;
  distance: number;
  duration: number;
  basePrice: number;
  description: string;
  status: string;
}

// Mock data
const routes: Route[] = [
  {
    id: "1",
    name: "Hải Dương - Hà Nội",
    startPoint: "Bến xe Hải Dương",
    endPoint: "Bến xe Giáp Bát, Hà Nội",
    distance: 60,
    duration: 90,
    basePrice: 120000,
    description:
      "Tuyến xe chính từ Hải Dương đến Hà Nội, đi qua QL5, cầu Thanh Trì",
    status: "active",
  },
  {
    id: "2",
    name: "Hà Nội - Hải Dương",
    startPoint: "Bến xe Giáp Bát, Hà Nội",
    endPoint: "Bến xe Hải Dương",
    distance: 60,
    duration: 90,
    basePrice: 120000,
    description:
      "Tuyến xe chính từ Hà Nội về Hải Dương, đi qua cầu Thanh Trì, QL5",
    status: "active",
  },
  {
    id: "3",
    name: "Hải Dương - Mỹ Đình",
    startPoint: "Bến xe Hải Dương",
    endPoint: "Bến xe Mỹ Đình, Hà Nội",
    distance: 65,
    duration: 100,
    basePrice: 130000,
    description:
      "Tuyến xe từ Hải Dương đến Bến xe Mỹ Đình, đi qua QL5, cầu Nhật Tân",
    status: "active",
  },
  {
    id: "4",
    name: "Mỹ Đình - Hải Dương",
    startPoint: "Bến xe Mỹ Đình, Hà Nội",
    endPoint: "Bến xe Hải Dương",
    distance: 65,
    duration: 100,
    basePrice: 130000,
    description:
      "Tuyến xe từ Bến xe Mỹ Đình về Hải Dương, đi qua cầu Nhật Tân, QL5",
    status: "active",
  },
  {
    id: "5",
    name: "Hải Dương - Nội Bài",
    startPoint: "Bến xe Hải Dương",
    endPoint: "Sân bay Nội Bài, Hà Nội",
    distance: 70,
    duration: 110,
    basePrice: 150000,
    description: "Tuyến xe đưa đón sân bay Nội Bài",
    status: "inactive",
  },
];

// Helper function to format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

// Helper function to format time
function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours} giờ ${mins} phút` : `${mins} phút`;
}

export default function RoutesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold tracking-tight">
          Quản lý tuyến đường
        </h3>
        <Link href="/admin/routes/new">
          <Button>
            <FiPlus className="mr-2 h-4 w-4" /> Thêm tuyến đường
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách tuyến đường</CardTitle>
          <CardDescription>
            Quản lý thông tin các tuyến đường cố định
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-full max-w-sm">
              <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm tuyến đường..."
                className="pl-8 w-full"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">Lọc</Button>
              <Button variant="outline">Xuất Excel</Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tên tuyến</TableHead>
                  <TableHead>Điểm đầu</TableHead>
                  <TableHead>Điểm cuối</TableHead>
                  <TableHead>Khoảng cách</TableHead>
                  <TableHead>Thời gian</TableHead>
                  <TableHead>Giá cơ bản</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {routes.map((route) => (
                  <TableRow key={route.id}>
                    <TableCell className="font-medium">{route.name}</TableCell>
                    <TableCell>{route.startPoint}</TableCell>
                    <TableCell>{route.endPoint}</TableCell>
                    <TableCell>{route.distance} km</TableCell>
                    <TableCell>{formatDuration(route.duration)}</TableCell>
                    <TableCell>{formatCurrency(route.basePrice)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          route.status === "active" ? "default" : "destructive"
                        }
                      >
                        {route.status === "active"
                          ? "Đang hoạt động"
                          : "Không hoạt động"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="icon">
                          <FiEye className="h-4 w-4" />
                        </Button>
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

          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm">
              Trước
            </Button>
            <Button variant="outline" size="sm">
              Tiếp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
