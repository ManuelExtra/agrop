export const form = () => {
  return (
    <>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            required={true}
            shadow={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the{' '}
            <a
              href="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
      <div id="textarea">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          required={true}
          rows={4}
        />
      </div>
      <div id="select">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Select your country" />
        </div>
        <Select id="countries" required={true}>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </Select>
      </div>
      <div className="flex flex-col gap-4" id="checkbox">
        <div className="flex items-center gap-2">
          <Checkbox id="accept" defaultChecked={true} />
          <Label htmlFor="accept">
            I agree to the{' '}
            <a
              href="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="promotion" />
          <Label htmlFor="promotion">I want to get promotional offers</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="age" />
          <Label htmlFor="age">I am 18 years or older</Label>
        </div>
        <div className="flex gap-2">
          <div className="flex h-5 items-center">
            <Checkbox id="shipping" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="shipping">Free shipping via Flowbite</Label>
            <div className="text-gray-500 dark:text-gray-300">
              <span className="text-xs font-normal">
                For orders shipped from Flowbite from{' '}
                <span className="font-medium">€ 25</span> in books or{' '}
                <span>€ 29</span> on other categories
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="disabled" disabled={true} />
          <Label htmlFor="disabled" disabled={true}>
            Eligible for international shipping (disabled)
          </Label>
        </div>
      </div>
      <fieldset className="flex flex-col gap-4" id="radio">
        <legend>Choose your favorite country</legend>
        <div className="flex items-center gap-2">
          <Radio
            id="united-state"
            name="countries"
            value="USA"
            defaultChecked={true}
          />
          <Label htmlFor="united-state">United States</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="germany" name="countries" value="Germany" />
          <Label htmlFor="germany">Germany</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="spain" name="countries" value="Spain" />
          <Label htmlFor="spain">Spain</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="uk" name="countries" value="United Kingdom" />
          <Label htmlFor="uk">United Kingdom</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="china" name="countries" value="China" disabled={true} />
          <Label htmlFor="china" disabled={true}>
            China (disabled)
          </Label>
        </div>
      </fieldset>
      <div id="fileUpload">
        <div className="mb-2 block">
          <Label htmlFor="file" value="Upload file" />
        </div>
        <FileInput
          id="file"
          helperText="A profile picture is useful to confirm your are logged into your account"
        />
      </div>
      <div
  className="flex flex-col gap-4"
  id="toggle"
>
  <ToggleSwitch
    checked={true}
    label="Toggle me"
    onChange={bound Gi}
  />
  <ToggleSwitch
    checked={false}
    label="Toggle me (checked)"
    onChange={bound Gi}
  />
  <ToggleSwitch
    checked={false}
    disabled={true}
    label="Toggle me (disabled)"
    onChange={onChange}
  />
</div>
    </>
  );
};
