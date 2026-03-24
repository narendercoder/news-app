import axios from "axios";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const keyword = searchParams.get("keyword") || "india";
  const category = searchParams.get("category");
  const limit = searchParams.get("limit") || 5;

  try {
    let url = "";

    // 🔍 Search
    if (keyword) {
      url = `https://gnews.io/api/v4/search?q=${keyword}&max=${limit}&lang=en&token=${process.env.NEXT_PUBLIC_API_KEY }`;
    }

    // 📰 Category (GNews uses topic instead)
    if (category) {
      url = `https://gnews.io/api/v4/top-headlines?topic=${category}&max=${limit}&lang=en&token=${process.env.NEXT_PUBLIC_API_KEY }`;
    }

    const res = await axios.get(url);

    return Response.json(res.data.articles);
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}