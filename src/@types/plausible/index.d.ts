type Options = {
    callback?:  () => void;
    props: Record<string, string | number | undefined>;

}

interface window {
    plausible: (event: 'add_fox' | 'remove_fox', options: Options) => void
}