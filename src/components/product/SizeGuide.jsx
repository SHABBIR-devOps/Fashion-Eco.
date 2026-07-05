import React from "react";
import Modal from "../common/Modal";

const ROWS = [
  { size: "XS", chest: "34-35", waist: "27-28" },
  { size: "S", chest: "36-37", waist: "29-30" },
  { size: "M", chest: "38-40", waist: "31-33" },
  { size: "L", chest: "41-43", waist: "34-36" },
  { size: "XL", chest: "44-46", waist: "37-39" },
];

export default function SizeGuide({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Size guide">
      <table className="w-full text-sm font-body">
        <thead>
          <tr className="text-left font-mono text-[11px] tracking-widest text-ink-soft border-b border-line">
            <th className="py-2">Size</th>
            <th className="py-2">Chest (in)</th>
            <th className="py-2">Waist (in)</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.size} className="border-b border-line/60">
              <td className="py-2 font-mono">{r.size}</td>
              <td className="py-2">{r.chest}</td>
              <td className="py-2">{r.waist}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="font-mono text-[10px] text-ink-soft mt-4">Between sizes? We recommend sizing up for a relaxed fit.</p>
    </Modal>
  );
}
