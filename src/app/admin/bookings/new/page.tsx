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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FiArrowLeft, FiSave } from "react-icons/fi";

export default function NewBookingPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold tracking-tight">Đặt vé mới</h3>
        <Link href="/admin/bookings">
          <Button variant="outline">
            <FiArrowLeft className="mr-2 h-4 w-4" /> Quay lại
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Thông tin đặt vé</CardTitle>
          <CardDescription>
            Nhập thông tin khách hàng và chuyến xe
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-sm font-medium leading-none">
                Thông tin khách hàng
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customerPhone">Số điện thoại</Label>
                  <Input
                    id="customerPhone"
                    placeholder="Nhập số điện thoại khách hàng"
                  />
                  <p className="text-sm text-muted-foreground">
                    Nhập số điện thoại để tìm kiếm khách hàng có sẵn
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customerName">Tên khách hàng</Label>
                  <Input id="customerName" placeholder="Nhập tên khách hàng" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium leading-none">
                Thông tin chuyến xe
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="route">Tuyến đường</Label>
                  <Select>
                    <SelectTrigger id="route">
                      <SelectValue placeholder="Chọn tuyến đường" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Các tuyến phổ biến</SelectLabel>
                        <SelectItem value="hd-hn">
                          Hải Dương - Hà Nội
                        </SelectItem>
                        <SelectItem value="hn-hd">
                          Hà Nội - Hải Dương
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tripDate">Ngày đi</Label>
                  <Select>
                    <SelectTrigger id="tripDate">
                      <SelectValue placeholder="Chọn ngày đi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Hôm nay</SelectItem>
                      <SelectItem value="tomorrow">Ngày mai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tripTime">Giờ khởi hành</Label>
                  <Select>
                    <SelectTrigger id="tripTime">
                      <SelectValue placeholder="Chọn giờ khởi hành" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sáng</SelectLabel>
                        <SelectItem value="6:00">06:00</SelectItem>
                        <SelectItem value="7:00">07:00</SelectItem>
                        <SelectItem value="8:00">08:00</SelectItem>
                        <SelectItem value="9:00">09:00</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Chiều</SelectLabel>
                        <SelectItem value="13:00">13:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passengers">Số lượng hành khách</Label>
                  <Input
                    id="passengers"
                    type="number"
                    min="1"
                    defaultValue="1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pickupLocation">Địa điểm đón</Label>
                  <Input id="pickupLocation" placeholder="Nhập địa điểm đón" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dropoffLocation">Địa điểm trả</Label>
                  <Input id="dropoffLocation" placeholder="Nhập địa điểm trả" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium leading-none">
                Thông tin thanh toán
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Giá vé</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    defaultValue="120000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discount">Giảm giá</Label>
                  <Input id="discount" type="number" min="0" defaultValue="0" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="finalPrice">Thành tiền</Label>
                  <Input
                    id="finalPrice"
                    type="number"
                    min="0"
                    defaultValue="120000"
                    readOnly
                    className="bg-muted"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Phương thức thanh toán</Label>
                <Select>
                  <SelectTrigger id="paymentMethod">
                    <SelectValue placeholder="Chọn phương thức thanh toán" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Tiền mặt</SelectItem>
                    <SelectItem value="bank_transfer">Chuyển khoản</SelectItem>
                    <SelectItem value="momo">Ví MoMo</SelectItem>
                    <SelectItem value="vnpay">VNPay</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="isPaid" />
                <label
                  htmlFor="isPaid"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Đã thanh toán
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium leading-none">
                Thông tin bổ sung
              </h4>

              <div className="space-y-2">
                <Label htmlFor="specialRequests">Yêu cầu đặc biệt</Label>
                <Textarea
                  id="specialRequests"
                  placeholder="Nhập yêu cầu đặc biệt (nếu có)"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" type="button">
                Hủy
              </Button>
              <Button type="submit">
                <FiSave className="mr-2 h-4 w-4" /> Lưu đặt vé
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
