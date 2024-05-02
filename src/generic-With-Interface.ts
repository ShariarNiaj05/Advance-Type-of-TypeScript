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
  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
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

  const richDeveloper: Developer<{
    brand: string;
    model: string;
    hearTrack: boolean;
    sleepTrack: boolean;
  }> = {
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
