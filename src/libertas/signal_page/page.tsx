// app/signal-validation/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "./components/navbar";
import Breadcrumb from "./components/breadcrumb";
import SignalDetails from "./components/signal-details";
import ChartPlaceholder from "./components/chart-placeholder";
import AnalysisSection from "./components/analysis-section";
import ValidationStatus from "./components/validation-status";
import ValidationActions from "./components/validation-actions";
import ValidationHistory from "./components/validation-history";
import { SignalDetail, ValidatorInfo, ExternalAnalysis } from "./types";

const SignalValidationPage = () => {
  // Mock data
  const breadcrumbItems = [
    { label: "Dashboard", active: false },
    { label: "Signal Queue", active: false },
    { label: "BUY Signal #4392", active: true },
  ];

  const signalDetails: SignalDetail[] = [
    { label: "Asset", value: "BTC/USD" },
    { label: "Signal Type", value: "Buy" },
    { label: "Entry Price", value: "$52,450.00" },
    { label: "Take Profit", value: "$54,850.00" },
    { label: "Stop Loss", value: "$51,200.00" },
    { label: "Time Frame", value: "4H" },
    { label: "Submitted By", value: "Alex Mercer" },
    { label: "Submitted On", value: "Today, 10:24 AM" },
    { label: "Expiration", value: "Today, 4:00 PM" },
  ];

  const analysisContent = [
    "BTC/USD is displaying a strong bullish pattern after breaking through the key resistance level at $52,000. The 4-hour chart shows a clear cup and handle formation that has been developing over the past week, with increased volume supporting the breakout.",
    "The RSI indicator is at 62, showing strong momentum without reaching overbought conditions. MACD is showing a bullish crossover with increasing histogram bars, confirming the strength of this move.",
    "With the current market sentiment and the recent positive news about institutional adoption, we expect BTC to continue its upward trajectory toward the $55,000 level in the short term.",
  ];

  const externalAnalyses: ExternalAnalysis[] = [
    {
      icon: "📊",
      title: "TradingView Analysis",
      description:
        "Detailed technical analysis available from TradingView including indicators, patterns, and additional price targets.",
    },
    {
      icon: "📈",
      title: "MetaTrader Analysis",
      description:
        "Comprehensive MetaTrader analysis with Fibonacci levels, key support/resistance zones, and volume profile.",
    },
  ];

  const validators: ValidatorInfo[] = [
    {
      id: 1,
      avatar: "SM",
      name: "Sarah Miller",
      approved: true,
      time: "10:42 AM",
      comment:
        "Strong breakout confirmed on multiple timeframes. Volume profile supports this move.",
    },
    {
      id: 2,
      avatar: "RJ",
      name: "Robert Johnson",
      approved: true,
      time: "10:38 AM",
      comment:
        "Agree with the analysis. Key resistance levels have been broken with good volume.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f7fa] text-[#333]">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />

      <main className="p-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-semibold text-[#2c3e50] flex items-center">
            Signal Validation
            <span className="ml-4 py-1 px-3 rounded bg-[#e8f5e9] text-[#388e3c] text-base font-semibold">
              BUY #4392
            </span>
          </div>
          <div className="flex">
            <Button variant="outline" className="mr-3">
              View History
            </Button>
            <Button variant="outline">Back to Queue</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
                <CardTitle>Signal Details</CardTitle>
                <span className="text-[#3498db] text-sm cursor-pointer">
                  View Original Analysis
                </span>
              </CardHeader>
              <CardContent className="pt-6">
                <SignalDetails details={signalDetails} />

                <ChartPlaceholder
                  title="BTC/USD Price Chart (4H Timeframe)"
                  subtitle="Loading from third-party platform..."
                />

                <AnalysisSection
                  content={analysisContent}
                  externalAnalyses={externalAnalyses}
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Validation Status</CardTitle>
              </CardHeader>
              <CardContent>
                <ValidationStatus
                  completed={2}
                  total={8}
                  percentComplete={25}
                  pending={6}
                />

                <ValidationActions />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Validation History</CardTitle>
              </CardHeader>
              <CardContent>
                <ValidationHistory validators={validators} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignalValidationPage;
