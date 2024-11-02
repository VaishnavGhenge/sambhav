import { IndianRupee } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container p-4">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="mt-4">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="report">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <IndianRupee className="w-[16px] h-[16px] text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₹45,231.89</div>
                    <p className="text-xs text-green-700">
                      +20.1% from today
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Orders
                    </CardTitle>
                    <IndianRupee className="w-[16px] h-[16px] text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">563</div>
                    <p className="text-xs text-green-700">
                      +23% from today
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Synced Orders
                    </CardTitle>
                    <IndianRupee className="w-[16px] h-[16px] text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      <span>559</span>
                      <span className="text-gray-300">/563</span>
                    </div>
                    <p className="flex gap-2 text-xs">
                      <span className="text-green-700">559 Success</span>
                      <span className="text-red-500">1 Failed</span>
                      <span className="text-muted-foreground">3 Pending</span>
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Synced Products
                    </CardTitle>
                    <IndianRupee className="w-[16px] h-[16px] text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      <span>46</span>
                      <span className="text-gray-300">/46</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Next sync in 6m 36s
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="report">Reports</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
