import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, TrendingDown, Target, AlertTriangle, DollarSign, CreditCard, PiggyBank, Bell } from 'lucide-react';

const monthlySpending = [
  { month: 'Jan', amount: 4200, predicted: 4100 },
  { month: 'Feb', amount: 3800, predicted: 3900 },
  { month: 'Mar', amount: 4500, predicted: 4300 },
  { month: 'Apr', amount: 3900, predicted: 4000 },
  { month: 'May', amount: 4100, predicted: 4200 },
  { month: 'Jun', amount: 4800, predicted: 4500 },
];

const expenseCategories = [
  { name: 'Food & Dining', amount: 1200, color: '#2563eb', percentage: 30 },
  { name: 'Transportation', amount: 800, color: '#16a34a', percentage: 20 },
  { name: 'Shopping', amount: 600, color: '#eab308', percentage: 15 },
  { name: 'Utilities', amount: 500, color: '#dc2626', percentage: 12.5 },
  { name: 'Entertainment', amount: 400, color: '#9333ea', percentage: 10 },
  { name: 'Healthcare', amount: 300, color: '#ea580c', percentage: 7.5 },
  { name: 'Others', amount: 200, color: '#64748b', percentage: 5 },
];

const goals = [
  { name: 'Emergency Fund', target: 10000, current: 7500, deadline: '2024-12-31' },
  { name: 'Vacation', target: 3000, current: 1800, deadline: '2024-08-15' },
  { name: 'New Car', target: 25000, current: 12000, deadline: '2025-06-01' },
];

const alerts = [
  { type: 'warning', message: 'You\'ve exceeded your dining budget by 15% this month', category: 'Food & Dining' },
  { type: 'info', message: 'Great job! You\'re 20% under budget for transportation', category: 'Transportation' },
  { type: 'danger', message: 'Unusual spending pattern detected in shopping category', category: 'Shopping' },
];

const weeklySpending = [
  { week: 'Week 1', amount: 950 },
  { week: 'Week 2', amount: 1200 },
  { week: 'Week 3', amount: 800 },
  { week: 'Week 4', amount: 1100 },
];

export const FinancialDashboard = () => {
  const totalSpent = expenseCategories.reduce((sum, cat) => sum + cat.amount, 0);
  const monthlyBudget = 4500;
  const budgetUsed = (totalSpent / monthlyBudget) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            AI Financial Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Smart expense tracking with predictive analytics
          </p>
        </div>

        {/* Budget Alerts */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-warning" />
              Budget Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${
                alert.type === 'warning' ? 'bg-warning/10 border border-warning/20' :
                alert.type === 'info' ? 'bg-success/10 border border-success/20' :
                'bg-destructive/10 border border-destructive/20'
              }`}>
                <AlertTriangle className={`h-4 w-4 mt-0.5 ${
                  alert.type === 'warning' ? 'text-warning' :
                  alert.type === 'info' ? 'text-success' :
                  'text-destructive'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <Badge variant="secondary" className="mt-1">{alert.category}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Spent</p>
                  <p className="text-2xl font-bold">${totalSpent.toLocaleString()}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingDown className="h-4 w-4 text-success" />
                    <span className="text-sm text-success">12% less than last month</span>
                  </div>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Budget Used</p>
                  <p className="text-2xl font-bold">{budgetUsed.toFixed(1)}%</p>
                  <Progress value={budgetUsed} className="mt-2 h-2" />
                </div>
                <CreditCard className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Savings Goal</p>
                  <p className="text-2xl font-bold">$7,500</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="text-sm text-success">75% of target</span>
                  </div>
                </div>
                <PiggyBank className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Spending Trend */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Spending Trend & Predictions</CardTitle>
              <CardDescription>AI-powered spending forecasts</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlySpending}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name="Actual Spending"
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="AI Prediction"
                    dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Expense Categories */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Expense Categories</CardTitle>
              <CardDescription>Automated categorization breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="amount"
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => [`$${value}`, 'Amount']}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Category Details & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Breakdown */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Category Breakdown</CardTitle>
              <CardDescription>Detailed spending analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {expenseCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <div>
                      <p className="font-medium">{category.name}</p>
                      <p className="text-sm text-muted-foreground">{category.percentage}% of total</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${category.amount}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Savings Goals */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Savings Goals
              </CardTitle>
              <CardDescription>Track your financial objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {goals.map((goal, index) => {
                const progress = (goal.current / goal.target) * 100;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{goal.name}</p>
                        <p className="text-sm text-muted-foreground">Due: {goal.deadline}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${goal.current.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">of ${goal.target.toLocaleString()}</p>
                      </div>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">{progress.toFixed(1)}% complete</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Weekly Analysis */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Weekly Spending Analysis</CardTitle>
            <CardDescription>Current month breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklySpending}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} 
                />
                <Bar 
                  dataKey="amount" 
                  fill="url(#gradient)" 
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};