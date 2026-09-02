import { capabilities } from "@/data/capabilities";
import { CapabilityPanel } from "@/components/capabilities/CapabilityPanel";

export function CapabilityGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-5">
      {capabilities.map((item) => (
        <CapabilityPanel key={item.id} item={item} />
      ))}
    </div>
  );
}
