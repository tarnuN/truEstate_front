import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

// Main PNG icons
import DashboardIcon from "../assets/Dashboard.png";
import NexusIcon from "../assets/Nexus.png";
import IntakeIcon from "../assets/Intake.png";
import InvoicesIcon from "../assets/Invoices.png";

// Services PNG
import PreActiveIcon from "../assets/services.png";
import ActiveIcon from "../assets/image copy.png";
import BlockedIcon from "../assets/t1.png";
import ClosedIcon from "../assets/closed.png";

// Invoice sub-items
import ProformaIcon from "../assets/Proforma Invoices.png";
import FinalInvoiceIcon from "../assets/image copy 2.png";

export default function Sidebar() {
  const [openServices, setOpenServices] = useState(true);
  const [openInvoices, setOpenInvoices] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const MenuItem = ({ label, png }) => {
    const isActive = active === label;
    return (
      <div
        onClick={() => setActive(label)}
        className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition
        ${isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"}`}
      >
        <img src={png} className="w-5 h-5 object-contain ml-1" alt="" />
        <div className="text-sm font-medium">{label}</div>
      </div>
    );
  };

  const SmallItem = ({ label, png }) => {
    const isActive = active === label;
    return (
      <div
        onClick={() => setActive(label)}
        className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ml-1 transition
        ${isActive ? "bg-white text-gray-900 font-semibold shadow-sm" : "text-gray-600 hover:bg-white"}`}
      >
        <img src={png} className="w-5 h-5 object-contain" alt="" />
        <div className="text-sm">{label}</div>
      </div>
    );
  };

  return (
    <aside className="w-64 bg-white h-screen border-r px-3 py-4">

      {/* Profile */}
      <div className="flex items-center gap-3 p-3 rounded-md bg-white mb-3">
        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
          V
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-gray-800">Vault</div>
          <div className="text-xs text-gray-500">Tarun Naik</div>
        </div>
        <div className="text-gray-400"><FaChevronDown /></div>
      </div>

      {/* Navigation */}
      <nav className="text-sm text-gray-700 space-y-2">

        <MenuItem label="Dashboard" png={DashboardIcon} />
        <MenuItem label="Nexus" png={NexusIcon} />
        <MenuItem label="Intake" png={IntakeIcon} />

        {/* Services */}
        <div className="mt-4">
          <div
            onClick={() => setOpenServices(s => !s)}
            className="flex items-center justify-between px-2 py-2 rounded-md cursor-pointer hover:bg-gray-100"
          >
            <div className="flex items-center gap-3 text-gray-600">
              <img src={DashboardIcon} className="w-5 h-5 object-contain ml-1" alt="" />
              <div className="font-medium">Services</div>
            </div>
            <div className="text-gray-400">
              {openServices ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          </div>

          {openServices && (
            <div className="mt-2 space-y-1 bg-gray-50 rounded-lg py-2 px-1 shadow-sm">
              <SmallItem label="Pre-active" png={PreActiveIcon} />
              <SmallItem label="Active" png={ActiveIcon} />
              <SmallItem label="Blocked" png={BlockedIcon} />
              <SmallItem label="Closed" png={ClosedIcon} />
            </div>
          )}
        </div>

        {/* Invoices */}
        <div className="mt-4">
          <div
            onClick={() => setOpenInvoices(s => !s)}
            className="flex items-center justify-between px-2 py-2 rounded-md cursor-pointer hover:bg-gray-100"
          >
            <div className="flex items-center gap-3 text-gray-600">
              <img src={InvoicesIcon} className="w-5 h-5 object-contain ml-1" alt="" />
              <div className="font-medium">Invoices</div>
            </div>
            <div className="text-gray-400">
              {openInvoices ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          </div>

          {openInvoices && (
            <div className="mt-2 space-y-1 bg-gray-50 rounded-lg py-2 px-1 shadow-sm">
              <SmallItem label="Proforma Invoices" png={ProformaIcon} />
              <SmallItem label="Final Invoices" png={FinalInvoiceIcon} />
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
