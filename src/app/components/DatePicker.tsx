import { useState } from "react";
import svgPaths from "../../imports/svg-lo80wtyue3";

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date) => void;
  className?: string;
  show: boolean;
  setShow: (show: boolean) => void;
  triggerRect?: DOMRect | null;
  defaultMonth?: Date | null;
}

const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export function DatePicker({ value, onChange, className, show, setShow, triggerRect, defaultMonth }: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(
    value ? value.getMonth() : defaultMonth ? defaultMonth.getMonth() : new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    value ? value.getFullYear() : defaultMonth ? defaultMonth.getFullYear() : new Date().getFullYear()
  );

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    onChange(date);
    setShow(false);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!value) return false;
    return (
      day === value.getDate() &&
      currentMonth === value.getMonth() &&
      currentYear === value.getFullYear()
    );
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Previous month days
    const prevMonthDays = getDaysInMonth(
      currentMonth === 0 ? 11 : currentMonth - 1,
      currentMonth === 0 ? currentYear - 1 : currentYear
    );
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <button
          key={`prev-${i}`}
          className="bg-white content-stretch flex flex-col items-center justify-center opacity-50 p-2 relative rounded hover:bg-gray-100 transition-colors shrink-0 size-12"
          disabled
        >
          <div className="flex flex-col justify-center leading-[0] relative shrink-0 size-8 text-foreground text-sm text-center">
            <p className="leading-5">{prevMonthDays - i}</p>
          </div>
        </button>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const selected = isSelected(day);
      const today = isToday(day);
      
      days.push(
        <button
          key={`current-${day}`}
          onClick={() => handleDateClick(day)}
          className={`content-stretch flex flex-col items-center justify-center p-2 relative rounded transition-colors shrink-0 size-12 ${
            selected
              ? "bg-[#12a594] hover:bg-[#0f8c7d]"
              : today
              ? "bg-gray-200 hover:bg-gray-300"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          <div className={`flex flex-col justify-center leading-[0] relative shrink-0 size-8 text-sm text-center ${
            selected ? "text-white font-medium" : "text-foreground"
          }`}>
            <p className="leading-5">{day}</p>
          </div>
        </button>
      );
    }

    // Next month days to fill the grid
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push(
          <button
            key={`next-${i}`}
            className="bg-white content-stretch flex flex-col items-center justify-center opacity-50 p-2 relative rounded hover:bg-gray-100 transition-colors shrink-0 size-12"
            disabled
          >
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 size-8 text-foreground text-sm text-center">
              <p className="leading-5">{i}</p>
            </div>
          </button>
        );
      }
    }

    return days;
  };

  const renderRows = () => {
    const days = renderCalendarDays();
    const rows = [];
    
    for (let i = 0; i < days.length; i += 7) {
      rows.push(
        <div key={i} className="content-stretch flex gap-px items-start relative shrink-0">
          {days.slice(i, i + 7)}
        </div>
      );
    }
    
    return rows;
  };

  return (
    <div className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-lg z-[100] border border-border p-4 w-[380px]">
      <div className="content-stretch flex flex-col gap-4 items-start relative size-full">
        {/* Header */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <button
            onClick={previousMonth}
            className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center min-h-8 min-w-8 p-2 relative rounded-lg shrink-0 hover:bg-gray-100 transition-colors"
          >
            <div aria-hidden="true" className="absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-sm" />
            <div className="overflow-clip relative shrink-0 size-4">
              <div className="absolute inset-[17.71%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
                  <g>
                    <path d={svgPaths.p36b34e80} fill="#0A0A0A" />
                    <path d={svgPaths.p1c890480} fill="#0A0A0A" />
                  </g>
                </svg>
              </div>
            </div>
          </button>
          <p className="font-medium leading-5 relative shrink-0 text-foreground text-sm whitespace-nowrap">
            {MONTHS[currentMonth]} {currentYear}
          </p>
          <button
            onClick={nextMonth}
            className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center min-h-8 min-w-8 p-2 relative rounded-lg shrink-0 hover:bg-gray-100 transition-colors"
          >
            <div aria-hidden="true" className="absolute border border-border border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-sm" />
            <div className="overflow-clip relative shrink-0 size-4">
              <div className="absolute inset-[17.71%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
                  <g>
                    <path d={svgPaths.p1c890480} fill="#0A0A0A" />
                    <path d={svgPaths.p3dc1e00} fill="#0A0A0A" />
                  </g>
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full">
          {/* Weekday Headers */}
          <div className="content-stretch flex items-center relative shrink-0 w-full mb-1">
            {WEEKDAYS.map((day) => (
              <div
                key={day}
                className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative rounded"
              >
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 size-8 text-muted-foreground text-xs text-center">
                  <p className="leading-4">{day}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          {renderRows()}
        </div>
      </div>
    </div>
  );
}