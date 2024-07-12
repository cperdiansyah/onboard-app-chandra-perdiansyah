'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover';
import { cn } from '@src/lib/utils';

export interface ICombobox {
  title?: string;
  items?: ComboItems[];
  value?: string;
  onSelect: (value: string) => void;
}
type ComboItems = {
  value: string;
  label: string;
};

const Combobox: React.FC<ICombobox> = (props) => {
  const { title = 'Items', items, value = '', onSelect } = props;
  const [open, setOpen] = React.useState(false);

  const handleSelect = (newValue: string) => {
    onSelect(newValue);
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? items?.find((item) => item.value === value)?.label
            : `Select ${title}...`}
          <ChevronsUpDown className="opacity-50 ml-2 w-4 h-4 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[200px]">
        <Command>
          <CommandInput placeholder={`Search ${title}...`} />
          <CommandEmpty>No {title} found.</CommandEmpty>
          <CommandGroup>
            {items?.map((item) => (
              <CommandItem
                key={item.value}
                value={item.label}
                onSelect={() => handleSelect(item.value)}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === item.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
