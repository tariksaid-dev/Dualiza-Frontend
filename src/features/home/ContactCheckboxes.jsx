import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

function ContactCheckBoxes({ options = [], form }) {
  return options.map((item) => (
    <FormField
      key={item.id}
      control={form.control}
      name="items"
      render={({ field }) => {
        return (
          <FormItem
            key={item.id}
            className="flex items-center space-x-2 space-y-0"
          >
            <FormControl>
              <Checkbox
                checked={field.value?.includes(item.id)}
                onCheckedChange={(checked) => {
                  return checked
                    ? field.onChange([...field.value, item.id])
                    : field.onChange(
                        field.value?.filter((value) => value !== item.id)
                      );
                }}
              />
            </FormControl>
            <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {item.name}
            </FormLabel>
          </FormItem>
        );
      }}
    />
  ));
}

export default ContactCheckBoxes;
