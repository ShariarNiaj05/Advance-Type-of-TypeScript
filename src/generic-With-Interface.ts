{
  // interface - generic

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  interface AmazeFitWatch {
    brand: string;
    model: string;
    display: string;
  }
  const poorDeveloper: Developer<AmazeFitWatch> = {
    name: "Niaj",
    computer: {
      brand: "Apple",
      model: "Pro M3",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Amazefit",
      model: "Pop 3R",
      display: "Amoled",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    hearTrack: boolean;
    sleepTrack: boolean;
  }
  const richDeveloper: Developer<AppleWatch> = {
    name: "Niaj",
    computer: {
      brand: "Apple",
      model: "Pro M3",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch 3",
      hearTrack: true,
      sleepTrack: true,
    },
  };
}
