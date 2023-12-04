import { Card, Subtitle, Text, Divider } from "@tremor/react";
import CityPicker from "@/components/CityPicker";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 text-gray-600 bg-gradient-to-br from-[#394f68] to-[#183b7e] ">
      <Card className="bg-white max-w-3xl">
        <Text className="!text-4xl font-bold text-center mb-6">
          GPT-4 Weather App
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.4, Tremor and more
        </Subtitle>

        <Divider className="my-6" />

        <Card className="bg-gradient-to-br from-[#394f68] to-[#183b7e]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
