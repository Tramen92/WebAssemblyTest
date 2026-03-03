import { car } from "@/types/car";

const PROJECT_ID = "showroom-88966";

export async function getCars(): Promise<car[]> {
  const res = await fetch(
    `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/cars`,
    { next: { revalidate: 60 } } // ISR automatico
  );

  const data = await res.json();

  return (data.documents ?? []).map((doc: any) => ({
    id: doc.name.split("/").pop(),
    brand: doc.fields.brand.stringValue,
    model: doc.fields.model.stringValue,
    imageUrl: doc.fields.imageUrl.stringValue,
    year: parseInt(doc.fields.year.integerValue),
    kilometers: parseInt(doc.fields.kilometers.integerValue),
    price: parseFloat(doc.fields.price.integerValue),
  }));
}