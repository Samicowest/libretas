import React, { useState } from "react";

const TradingSignalForm: React.FC = () => {
  const [formData, setFormData] = useState({
    asset: "",
    signalType: "",
    entryPrice: "",
    takeProfit: "",
    stopLoss: "",
    timeframe: "",
    expirationTime: "",
    description: "",
    link: "", // New field for link
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you can add logic to send the data to your backend or API
  };

  // Predefined trading pairs
  const tradingPairs = [
    { value: "BTC/USD", label: "BTC/USD" },
    { value: "ETH/USD", label: "ETH/USD" },
    { value: "XRP/USD", label: "XRP/USD" },
    { value: "LTC/USD", label: "LTC/USD" },
    { value: "ADA/USD", label: "ADA/USD" },
  ];

  return (
    <div className="min-h-screen py-4 bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Send Trading Signal
        </h2>

        {/* Grid for Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Asset */}
          <div>
            <label
              htmlFor="asset"
              className="block text-sm font-medium text-gray-700"
            >
              Asset
            </label>
            <select
              id="asset"
              name="asset"
              value={formData.asset}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>
                Select Asset
              </option>
              {tradingPairs.map((pair) => (
                <option key={pair.value} value={pair.value}>
                  {pair.label}
                </option>
              ))}
            </select>
          </div>

          {/* Signal Type */}
          <div>
            <label
              htmlFor="signalType"
              className="block text-sm font-medium text-gray-700"
            >
              Signal Type
            </label>
            <select
              id="signalType"
              name="signalType"
              value={formData.signalType}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>
                Select Signal Type
              </option>
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </select>
          </div>

          {/* Entry Price */}
          <div>
            <label
              htmlFor="entryPrice"
              className="block text-sm font-medium text-gray-700"
            >
              Entry Price
            </label>
            <input
              type="number"
              id="entryPrice"
              name="entryPrice"
              value={formData.entryPrice}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Take Profit */}
          <div>
            <label
              htmlFor="takeProfit"
              className="block text-sm font-medium text-gray-700"
            >
              Take Profit
            </label>
            <input
              type="number"
              id="takeProfit"
              name="takeProfit"
              value={formData.takeProfit}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Stop Loss */}
          <div>
            <label
              htmlFor="stopLoss"
              className="block text-sm font-medium text-gray-700"
            >
              Stop Loss
            </label>
            <input
              type="number"
              id="stopLoss"
              name="stopLoss"
              value={formData.stopLoss}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Timeframe */}
          <div>
            <label
              htmlFor="timeframe"
              className="block text-sm font-medium text-gray-700"
            >
              Timeframe
            </label>
            <select
              id="timeframe"
              name="timeframe"
              value={formData.timeframe}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>
                Select Timeframe
              </option>
              <option value="1m">1 Minute</option>
              <option value="5m">5 Minutes</option>
              <option value="15m">15 Minutes</option>
              <option value="1h">1 Hour</option>
              <option value="4h">4 Hours</option>
              <option value="1d">1 Day</option>
            </select>
          </div>

          {/* Expiration Time */}
          <div>
            <label
              htmlFor="expirationTime"
              className="block text-sm font-medium text-gray-700"
            >
              Expiration Time
            </label>
            <input
              type="datetime-local"
              id="expirationTime"
              name="expirationTime"
              value={formData.expirationTime}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Link Input */}
          <div>
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-700"
            >
              Link
            </label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter a link (optional)"
            />
          </div>
        </div>

        {/* Description (Textarea) */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter a description for the signal..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Signal
          </button>
        </div>
      </form>
    </div>
  );
};

export default TradingSignalForm;
