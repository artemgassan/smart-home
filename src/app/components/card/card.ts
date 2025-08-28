import {
  input,
  inject,
  computed,
  Component,
  viewChildren,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  TuiTitle,
  TuiButton,
  TuiAppearance,
  TuiDialogService,
  type TuiDialogContext,
} from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { TuiSwitch } from '@taiga-ui/kit';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Device } from '@/app/components/device/device';
import { Sensor } from '@/app/components/sensor/sensor';
import { Layout } from '@/app/interfaces/cards.interface';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { selectEditMode } from '@/app/store/selectors/dashboard.selectors';
import type { CardType, LayoutType } from '@/app/interfaces/cards.interface';
import { EditCardModal } from '@/app/components/modals/edit-card-modal/edit-card-modal';

@Component({
  selector: 'app-card',
  imports: [
    TuiTitle,
    TuiSwitch,
    TuiAppearance,
    TuiCardLarge,
    TuiHeader,
    Device,
    Sensor,
    FormsModule,
    NgClass,
    TuiButton,
    EditCardModal,
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  public card = input.required<CardType>();
  public items = computed(() => this.card().items);
  public devices = viewChildren(Device);
  public groupState = computed(() => this.devices().some((device) => device.state()));

  protected readonly store = inject(Store);
  protected readonly editMode = this.store.selectSignal(selectEditMode);
  private readonly dialogs = inject(TuiDialogService);

  public toggleDevices(state: boolean): void {
    this.devices().forEach((device) => device.toggleDeviceState(state));
  }

  protected getTitle(): string {
    return this.card().title;
  }

  protected getLayout(): LayoutType {
    return this.card().layout;
  }

  protected getLayoutStyleClass(): string {
    const layout = this.getLayout();
    if (layout === Layout.MultiHorizontalDevice) return 'horizontal-layout';
    if (layout === Layout.MultiVerticalDevice) return 'vertical-layout';
    else return 'single-device';
  }

  protected showGroupToggle(): boolean {
    const items = this.items();
    const minCountDevices = 2;

    if (!this.editMode()) {
      const deviceCount = items.filter((item) => item.type === 'device').length;
      return deviceCount >= minCountDevices;
    }

    return false;
  }

  protected onEditCard(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs.open(content).subscribe();
  }
}
