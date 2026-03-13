import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'containsFilter',
  standalone: true,
})
export class ContainsFilterPipe implements PipeTransform {
  transform<T>(
    items: T[] | null | undefined,
    value: string | null | undefined,
    field?: keyof T | string
  ): T[] {
    if (!Array.isArray(items) || items.length === 0) {
      return [];
    }

    const searchText = (value ?? '').trim().toLowerCase();
    if (!searchText) {
      return items;
    }

    return items.filter((item) => {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(searchText);
      }

      if (field && item && typeof item === 'object') {
        const fieldValue = (item as Record<string, unknown>)[field as string];
        return String(fieldValue ?? '').toLowerCase().includes(searchText);
      }

      return String(item ?? '').toLowerCase().includes(searchText);
    });
  }
}
