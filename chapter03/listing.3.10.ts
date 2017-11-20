it('should not update the contact if email is invalid', fakeAsync(() => {
  const newContact = {
    id: 1,
    name: 'london',
    email: 'london@example',
    number: '1234567890'
  };
  
  component.contact = {
    id: 2,
    name: 'chauncey',
    email: 'chauncey@example.com',
    number: '1234567890'
  };

  component.isLoading = false;
  fixture.detectChanges();
  let nameInput = rootElement.query(By.css('.contact-name'));
  tick();
  expect(nameInput.nativeElement.value).toBe('chauncey');

  component.updateContact(newContact);
  fixture.detectChanges();
  tick(100);
  expect(nameInput.nativeElement.value).toBe('chauncey');
}));
