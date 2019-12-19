export interface Slot {
    uuid: string;
    from: string;
    until: string;
    livestream: {
      uuid: string;
      url: string;
    };
  }
