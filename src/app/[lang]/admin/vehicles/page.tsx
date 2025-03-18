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
import { FiEdit, FiTrash2, FiPlus, FiSearch, FiFilter, FiFileText } from "react-icons/fi";

interface Vehicle {
  id: string;
  licensePlate: string;
  model: string;
  capacity: number;
  driverName: string;
  status: string;
  lastMaintenance: string;
}

// Mock data
const vehicles: Vehicle[] = [
  {
    id: "1",
    licensePlate: "34A-12345",
    model: "Toyota Hiace",
    capacity: 16,
    driverName: "Nguyễn Văn A",
    status: "active",
    lastMaintenance: "2023-05-10",
  },
  {
    id: "2",
    licensePlate: "34B-54321",
    model: "Ford Transit",
    capacity: 16,
    driverName: "Trần Văn B",
    status: "active",
    lastMaintenance: "2023-06-05",
  },
  {
    id: "3",
    licensePlate: "34C-67890",
    model: "Hyundai Solati",
    capacity: 29,
    driverName: "Lê Văn C",
    status: "maintenance",
    lastMaintenance: "2023-06-15",
  },
  {
    id: "4",
    licensePlate: "34D-45678",
    model: "Mercedes Sprinter",
    capacity: 16,
    driverName: "Phạm Văn D",
    status: "active",
    lastMaintenance: "2023-04-20",
  },
  {
    id: "5",
    licensePlate: "34H-98765",
    model: "Samco Felix",
    capacity: 29,
    driverName: "Hoàng Văn E",
    status: "inactive",
    lastMaintenance: "2023-03-15",
  },
];

export default function VehiclesPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Quản lý xe</h3>
        <Link href="/admin/vehicles/new">
          <Button className="w-full sm:w-auto">
            <FiPlus className="mr-2 h-4 w-4" /> <span>Thêm xe mới</span>
          </Button>
        </Link>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle>Danh sách xe</CardTitle>
          <CardDescription className="hidden sm:block">Quản lý thông tin xe của công ty</CardDescription>
        </CardHeader>
        <CardContent className="p-0 sm:p-6 pt-0">
          <div className="px-4 sm:px-0 mb-4 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div className="relative w-full sm:max-w-sm">
              <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm xe..."
                className="pl-8 w-full"
              />
            </div>
            <div className="flex w-full sm:w-auto gap-2 justify-end">
              <Button variant="outline" size="sm" className="h-10">
                <FiFilter className="h-4 w-4 mr-2 sm:mr-0 md:mr-2" />
                <span className="sm:hidden md:inline">Lọc</span>
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
                  <TableHead>Biển số xe</TableHead>
                  <TableHead>Loại xe</TableHead>
                  <TableHead>Sức chứa</TableHead>
                  <TableHead>Tài xế</TableHead>
                  <TableHead>Bảo dưỡng gần nhất</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicles.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell className="font-medium">
                      {vehicle.licensePlate}
                    </TableCell>
                    <TableCell>{vehicle.model}</TableCell>
                    <TableCell>{vehicle.capacity} chỗ</TableCell>
                    <TableCell>{vehicle.driverName}</TableCell>
                    <TableCell>
                      {new Date(vehicle.lastMaintenance).toLocaleDateString(
                        "vi-VN"
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          vehicle.status === "active"
                            ? "default"
                            : vehicle.status === "maintenance"
                            ? "outline"
                            : "destructive"
                        }
                      >
                        {vehicle.status === "active"
                          ? "Đang hoạt động"
                          : vehicle.status === "maintenance"
                          ? "Đang bảo dưỡng"
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

          {/* Mobile card layout */}
          <div className="block md:hidden">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="border-b p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{vehicle.licensePlate}</h4>
                    <p className="text-sm text-muted-foreground">{vehicle.model}</p>
                  </div>
                  <Badge
                    variant={
                      vehicle.status === "active"
                        ? "default"
                        : vehicle.status === "maintenance"
                        ? "outline"
                        : "destructive"
                    }
                  >
                    {vehicle.status === "active"
                      ? "Đang hoạt động"
                      : vehicle.status === "maintenance"
                      ? "Đang bảo dưỡng"
                      : "Không hoạt động"}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Sức chứa:</span>
                  </div>
                  <div>{vehicle.capacity} chỗ</div>
                  
                  <div>
                    <span className="text-muted-foreground">Tài xế:</span>
                  </div>
                  <div>{vehicle.driverName}</div>
                  
                  <div>
                    <span className="text-muted-foreground">Bảo dưỡng gần nhất:</span>
                  </div>
                  <div>{new Date(vehicle.lastMaintenance).toLocaleDateString("vi-VN")}</div>
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
              1-{vehicles.length} của {vehicles.length} xe
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
