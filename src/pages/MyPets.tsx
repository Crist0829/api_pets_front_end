import { PublicationsSection } from "@/components/feed/PublicationsSection";
import { LoaderPets } from "@/components/LoaderPets";
import { TypographyH1 } from "@/components/ui/typography/H1";
import { BASE_URL_API } from "@/config";
import { useFetch } from "@/hooks/UseFetch";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import useAuthStore from "@/stores/AuthStore";
import { Pet } from "@/types/types";
interface Response {
  data: Pet[];
  message: string;
}

function MyPets() {
  const user = useAuthStore((state) => state.auth.user);
  const { data, loading, error } = useFetch<Response>(
    BASE_URL_API + "/pets/me"
  );
  console.log(data);
  // !error
  if (error && !loading) {
    return (
      <DashboardLayout>
        <header className="my-4">
          <TypographyH1>Welcome {user?.email}</TypographyH1>
          <h3>An Error </h3>
        </header>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <main className="py-10 ">
        {loading ? (
          <LoaderPets />
        ) : (
          <div className="flex flex-col p-3 md:flex-row items-start gap-5">
            <section className="flex-grow flex-shrink-0 w-full mx-auto max-w-[600px]">
              <PublicationsSection pets={data!.data} />
            </section>
          </div>
        )}
      </main>
    </DashboardLayout>
  );
}

export { MyPets };
