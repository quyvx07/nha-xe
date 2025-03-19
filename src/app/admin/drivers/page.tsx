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
import { FiEdit, FiTrash2, FiPlus, FiSearch } from "react-icons/fi";

interface Driver {
  id: string;
  name: string;
  license: string;
  licenseType: string;
  experience: number;
  phone: string;
  status: string;
}

// Mock data
const drivers: Driver[] = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    license: "123456789",
    licenseType: "B2",
    experience: 5,
    phone: "0987654321",
    status: "active",
  },
  {
    id: "2",
    name: "Trần Văn B",
    license: "987654321",
    licenseType: "D",
    experience: 8,
    phone: "0123456789",
    status: "active",
  },
  {
    id: "3",
    name: "Lê Văn C",
    license: "456789123",
    licenseType: "E",
    experience: 10,
    phone: "0369852147",
    status: "inactive",
  },
  {
    id: "4",
    name: "Phạm Văn D",
    license: "789123456",
    licenseType: "D",
    experience: 4,
    phone: "0321654987",
    status: "active",
  },
  {
    id: "5",
    name: "Hoàng Văn E",
    license: "321456987",
    licenseType: "B2",
    experience: 3,
    phone: "0912345678",
    status: "active",
  },
];

export default function DriversPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold tracking-tight">Quản lý tài xế</h3>
        <Link href="/admin/drivers/new">
          <Button>
            <FiPlus className="mr-2 h-4 w-4" /> Thêm tài xế
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách tài xế</CardTitle>
          <CardDescription>
            Quản lý thông tin tài xế của công ty
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-full max-w-sm">
              <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm tài xế..."
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
                  <TableHead>Tên tài xế</TableHead>
                  <TableHead>GPLX</TableHead>
                  <TableHead>Hạng</TableHead>
                  <TableHead>Kinh nghiệm</TableHead>
                  <TableHead>Số điện thoại</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drivers.map((driver) => (
                  <TableRow key={driver.id}>
                    <TableCell className="font-medium">{driver.name}</TableCell>
                    <TableCell>{driver.license}</TableCell>
                    <TableCell>{driver.licenseType}</TableCell>
                    <TableCell>{driver.experience} năm</TableCell>
                    <TableCell>{driver.phone}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          driver.status === "active" ? "default" : "destructive"
                        }
                      >
                        {driver.status === "active"
                          ? "Đang hoạt động"
                          : "Không hoạt động"}
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
