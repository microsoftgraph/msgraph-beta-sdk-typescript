/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createContactCollectionResponseFromDiscriminatorValue, createContactFromDiscriminatorValue, serializeContact, type Contact, type ContactCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeltaRequestBuilderRequestsMetadata, DeltaRequestBuilderUriTemplate, type DeltaRequestBuilder } from './delta/';
import { ContactItemRequestBuilderNavigationMetadata, ContactItemRequestBuilderRequestsMetadata, ContactItemRequestBuilderUriTemplate, type ContactItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contacts property of the microsoft.graph.contactFolder entity.
 */
export interface ContactsRequestBuilder extends BaseRequestBuilder<ContactsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to manage the contacts property of the microsoft.graph.contactFolder entity.
     * @param contactId The unique identifier of contact
     * @returns a ContactItemRequestBuilder
     */
     byContactId(contactId: string) : ContactItemRequestBuilder;
    /**
     * Get all the contacts in the signed-in user's mailbox (.../me/contacts), or from the specified contact folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContactCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/contactfolder-list-contacts?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ContactsRequestBuilderGetQueryParameters> | undefined) : Promise<ContactCollectionResponse | undefined>;
    /**
     * Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Contact
     * @see {@link https://learn.microsoft.com/graph/api/contactfolder-post-contacts?view=graph-rest-1.0|Find more info here}
     */
     post(body: Contact, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Contact | undefined>;
    /**
     * Get all the contacts in the signed-in user's mailbox (.../me/contacts), or from the specified contact folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ContactsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Contact, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get all the contacts in the signed-in user's mailbox (.../me/contacts), or from the specified contact folder.
 */
export interface ContactsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ContactsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ContactsRequestBuilderNavigationMetadata: Record<Exclude<keyof ContactsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byContactId: {
        uriTemplate: ContactItemRequestBuilderUriTemplate,
        requestsMetadata: ContactItemRequestBuilderRequestsMetadata,
        navigationMetadata: ContactItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["contact%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    delta: {
        uriTemplate: DeltaRequestBuilderUriTemplate,
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ContactsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createContactCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ContactsRequestBuilderGetQueryParametersMapper,
    },
    post: {
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
export const ContactsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/contactFolders/{contactFolder%2Did}/contacts{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */