import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function Dashboard() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>Total Number Of Products</CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">$ 376465</div>
              <Progress value={22.8} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Total Number Of Orders</CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">$ 376465</div>
              <Progress value={22.8} />
            </div>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 md:col-span-1">
          <CardHeader>Total Number Of Payments</CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">$ 376465</div>
              <Progress value={22.8} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Sale Growth</h2>
        <div className="flex flex-wrap space-x-2 space-y-2 sm:space-y-0">
          <Button variant="outline">All</Button>
          <Button variant="outline">Monthly</Button>
          <Button variant="outline">Weekly</Button>
          <Button variant="outline">Today</Button>
        </div>
      </div>
    </div>
  );
}
