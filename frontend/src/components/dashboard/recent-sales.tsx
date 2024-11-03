import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function RecentSales() {
  const sales = [
    {
      initials: 'OM',
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      amount: '+$1,999.00'
    },
    {
      initials: 'JL',
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      amount: '+$39.00'
    },
    {
      initials: 'IN',
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      amount: '+$299.00'
    },
    {
      initials: 'WK',
      name: 'William Kim',
      email: 'will@email.com',
      amount: '+$99.00'
    },
    {
      initials: 'SD',
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      amount: '+$39.00'
    }
  ];

  return (
    <div className="space-y-8">
      {sales.map((sale) => (
        <div key={sale.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="text-sm font-medium">
              {sale.initials}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-slate-500">{sale.email}</p>
          </div>
          <div className="ml-auto text-sm font-medium">{sale.amount}</div>
        </div>
      ))}
    </div>
  );
}

export default RecentSales;