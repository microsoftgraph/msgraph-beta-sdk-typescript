/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createContactFromDiscriminatorValue, serializeContact, type Contact } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ExtensionsRequestBuilderNavigationMetadata, ExtensionsRequestBuilderRequestsMetadata, ExtensionsRequestBuilderUriTemplate, type ExtensionsRequestBuilder } from './extensions/';
import { PhotoRequestBuilderNavigationMetadata, PhotoRequestBuilderRequestsMetadata, PhotoRequestBuilderUriTemplate, type PhotoRequestBuilder } from './photo/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contacts property of the microsoft.graph.user entity.
 */
export interface ContactItemRequestBuilder extends BaseRequestBuilder<ContactItemRequestBuilder> {
    /**
     * Provides operations to manage the extensions property of the microsoft.graph.contact entity.
     */
    get extensions(): ExtensionsRequestBuilder;
    /**
     * Provides operations to manage the photo property of the microsoft.graph.contact entity.
     */
    get photo(): PhotoRequestBuilder;
    /**
     * Delete contact.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/contact-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of contact object. There are two scenarios where an app can get a contact in another user's contact folder:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Contact
     * @see {@link https://learn.microsoft.com/graph/api/contact-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ContactItemRequestBuilderGetQueryParameters> | undefined) : Promise<Contact | undefined>;
    /**
     * Update the properties of contact object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Contact
     * @see {@link https://learn.microsoft.com/graph/api/contact-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: Contact, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Contact | undefined>;
    /**
     * Delete contact.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of contact object. There are two scenarios where an app can get a contact in another user's contact folder:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ContactItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of contact object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Contact, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of contact object. There are two scenarios where an app can get a contact in another user's contact folder:
 */
export interface ContactItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ContactItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ContactItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ContactItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    extensions: {
        uriTemplate: ExtensionsRequestBuilderUriTemplate,
        requestsMetadata: ExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: ExtensionsRequestBuilderNavigationMetadata,
    },
    photo: {
        uriTemplate: PhotoRequestBuilderUriTemplate,
        requestsMetadata: PhotoRequestBuilderRequestsMetadata,
        navigationMetadata: PhotoRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ContactItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createContactFromDiscriminatorValue,
        queryParametersMapper: ContactItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createContactFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeContact,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ContactItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/contacts/{contact%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */